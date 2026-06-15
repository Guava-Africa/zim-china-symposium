const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const { Resend } = require('resend');
const { getConfirmationEmail, getAdminNotificationHtml } = require('./email/confirmationEmail');

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

const PORT = process.env.PORT || 5000;

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('📁 Created uploads directory:', uploadsDir);
}

// Configure multer for disk storage (saves files to disk)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    // Sanitize the full name to create a safe filename
    const { fullName, title } = req.body;
    const safeName = (fullName || 'user')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '_')
      .substring(0, 50);
    const timestamp = Date.now();
    const extension = path.extname(file.originalname);
    const filename = `${safeName}_${timestamp}${extension}`;
    cb(null, filename);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// Serve static files from uploads folder (so images can be viewed via URL)
app.use('/uploads', express.static(uploadsDir));

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://127.0.0.1:3000'],
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many registration attempts. Please try again later.' }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is running', timestamp: new Date().toISOString() });
});

// Registration endpoint
app.post('/api/register', limiter, upload.single('profileImage'), async (req, res) => {
  try {
    console.log('📝 Registration request received');
    
    const { title, fullName, email, phone, nationality, nationalId, organization } = req.body;
    
    console.log('📦 Data:', { title, fullName, email, phone, nationality, nationalId, organization });
    console.log('📎 File:', req.file ? req.file.filename : 'No file');
    
    // Validate required fields
    const missingFields = [];
    if (!title) missingFields.push('title');
    if (!fullName) missingFields.push('fullName');
    if (!email) missingFields.push('email');
    if (!phone) missingFields.push('phone');
    if (!nationality) missingFields.push('nationality');
    if (!nationalId) missingFields.push('nationalId');
    if (!organization) missingFields.push('organization');
    
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        success: false, 
        error: `Missing fields: ${missingFields.join(', ')}` 
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Invalid email format' });
    }

    // Check existing registration
    const existingRegistration = await prisma.registration.findUnique({
      where: { email }
    });

    if (existingRegistration) {
      return res.status(409).json({ 
        success: false, 
        error: 'Email already registered' 
      });
    }

    // Store file path if uploaded
    let profilePhotoPath = null;
    if (req.file) {
      profilePhotoPath = `/uploads/${req.file.filename}`;
      console.log('✅ Image saved to:', profilePhotoPath);
    }

    // Create registration
    const registration = await prisma.registration.create({
      data: {
        title,
        fullName,
        email,
        phone,
        nationality,
        nationalId,
        organization,
        profilePhoto: profilePhotoPath,
        status: 'pending'
      }
    });

    console.log('✅ Registration saved, ID:', registration.id);

    // Send confirmation email
    if (process.env.RESEND_API_KEY) {
      try {
        const emailHtml = getConfirmationEmail({
          id: registration.id,
          title,
          fullName,
          organization,
          nationality
        });
        
        await resend.emails.send({
          // from: 'Zimbabwe-China Symposium <noreply@zimchinasymposium.com>',
          from: 'Zimbabwe-China Symposium <admin@toitsolutions.co.zw>',
          to: [email],
          subject: 'Registration Confirmed for Zimbabwe-China Investment Symposium 2026',
          html: emailHtml
        });
        console.log('✅ Email sent to:', email);
      } catch (emailError) {
        console.error('❌ Email error:', emailError.message);
      }
    }

    res.status(201).json({ 
      success: true, 
      message: 'Registration successful! Check your email.',
      data: { 
        id: registration.id, 
        email: registration.email,
        photoUrl: profilePhotoPath 
      }
    });

  } catch (error) {
    console.error('❌ Registration error:', error);
    
    // Delete uploaded file if there was an error
    if (req.file) {
      const filePath = path.join(uploadsDir, req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log('🗑️ Deleted file due to error:', req.file.filename);
      }
    }
    
    if (error.code === 'P2002') {
      return res.status(409).json({ success: false, error: 'Email already registered' });
    }
    
    res.status(500).json({ 
      success: false, 
      error: 'Server error: ' + (error.message || 'Unknown error')
    });
  }
});

// Get registration with photo URL
app.get('/api/registration/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const registration = await prisma.registration.findUnique({
      where: { email },
      select: { 
        id: true, 
        status: true, 
        createdAt: true, 
        fullName: true, 
        title: true,
        profilePhoto: true
      }
    });
    
    if (!registration) {
      return res.status(404).json({ success: false, error: 'Not found' });
    }
    
    // Construct full URL for photo
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const photoUrl = registration.profilePhoto ? `${baseUrl}${registration.profilePhoto}` : null;
    
    res.json({ 
      success: true, 
      data: {
        ...registration,
        photoUrl
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Get all registrations with photo URLs
app.get('/api/registrations', async (req, res) => {
  try {
    const registrations = await prisma.registration.findMany({
      orderBy: { createdAt: 'desc' },
      select: { 
        id: true, 
        title: true, 
        fullName: true, 
        email: true, 
        phone: true, 
        nationality: true, 
        organization: true, 
        status: true, 
        createdAt: true,
        profilePhoto: true
      }
    });
    
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const registrationsWithUrls = registrations.map(reg => ({
      ...reg,
      photoUrl: reg.profilePhoto ? `${baseUrl}${reg.profilePhoto}` : null
    }));
    
    res.json({ success: true, data: registrationsWithUrls });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Get a specific photo file
app.get('/api/photo/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(uploadsDir, filename);
  
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ error: 'Photo not found' });
  }
});

// Update registration status
app.patch('/api/registration/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid status' });
    }
    
    const updated = await prisma.registration.update({
      where: { id },
      data: { status }
    });
    
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════╗
║     🚀 Zimbabwe-China Symposium Backend Running         ║
╠══════════════════════════════════════════════════════════╣
║  📡 Server: http://localhost:${PORT}                       
║  💚 Health: http://localhost:${PORT}/api/health            
║  📧 Email: ${process.env.RESEND_API_KEY ? '✅ Ready' : '❌ Not configured'}
║  🗄️  Database: ✅ MySQL Connected
║  📁 Uploads: ${uploadsDir}
╚══════════════════════════════════════════════════════════╝
  `);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});