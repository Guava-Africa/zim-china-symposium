// Logo URLs - USE PUBLIC URLs (replace these with your actual uploaded image URLs)
const ZIMCHINA_LOGO = 'http://localhost:5000/uploads/Zimchina.png';
const CHAMBER_LOGO = 'http://localhost:5000/uploads/chamberlogo.png';
const AFRICAPACITI_LOGO = 'http://localhost:5000/uploads/africapaciti.png';

// Base email wrapper
const getEmailWrapper = (content) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Registration Confirmation - Zimbabwe-China Investment Symposium</title>
  <style>
    /* Dark mode compatibility */
    @media (prefers-color-scheme: dark) {
      .dark-text { color: #ffffff !important; }
      .dark-bg { background: #1a1a2e !important; }
      .dark-card { background: #2a2a4e !important; border-color: #d4af37 !important; }
      .dark-details { color: #e0e0e0 !important; }
      .dark-label { color: #a0a0a0 !important; }
      .dark-value { color: #ffffff !important; }
      .dark-info { background: #1a2a3a !important; color: #e0e0e0 !important; }
      .dark-important { background: #2a1a1a !important; border-left-color: #ff4444 !important; }
      .dark-important-text { color: #ff6666 !important; }
      .dark-footer { background: #1a1a2e !important; }
      .dark-footer-text { color: #888888 !important; }
      .dark-link { color: #d4af37 !important; }
      .dark-button { background: #dc2626 !important; color: #ffffff !important; }
      .dark-map-link { background: #1a2a3a !important; color: #d4af37 !important; border-color: #d4af37 !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #0a1928; width: 100%;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: #0a1928; width: 100%;">
    <tr>
      <td align="center" style="padding: 20px 10px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 550px; width: 100%; background: #ffffff; border-radius: 24px; overflow: hidden;">
          ${content}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

// Email content
const getEmailContent = (data) => `
  <!-- Hero Section -->
  <tr>
    <td style="background: linear-gradient(135deg, #0a1928 0%, #1e3a5f 100%); padding: 35px 25px; text-align: center;">
      <div style="display: flex; justify-content: center; align-items: center; gap: 15px; margin-bottom: 25px; flex-wrap: wrap;">
        <div style="background: white; border-radius: 14px; padding: 10px 16px; display: inline-block;">
          <img src="${ZIMCHINA_LOGO}" alt="Zimbabwe-China Symposium" style="height: 45px; width: auto; display: block;">
        </div>
        <div style="background: white; border-radius: 14px; padding: 10px 16px; display: inline-block;">
          <img src="${AFRICAPACITI_LOGO}" alt="Africapaciti" style="height: 45px; width: auto; display: block;">
        </div>
        <div style="background: white; border-radius: 14px; padding: 10px 16px; display: inline-block;">
          <img src="${CHAMBER_LOGO}" alt="Chamber of Chinese Enterprises" style="height: 45px; width: auto; display: block;">
        </div>
      </div>
      
      <!-- BIGGER, BOLDER, SEXIER HEADER - Visible in dark mode -->
      <div style="font-size: 32px; font-weight: 800; color: #ffffff; margin: 0 0 10px 0; line-height: 1.2; letter-spacing: -0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);" class="dark-text">
        Registration Confirmed!
      </div>
      <div style="font-size: 18px; font-weight: 600; color: #d4af37; margin: 0; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.2);" class="dark-text">
        Zimbabwe-China Investment Symposium 2026
      </div>
    </td>
  </tr>
  
  <!-- Content -->
  <tr>
    <td style="padding: 30px 25px; background: #ffffff;" class="dark-bg">
      <!-- Greeting - BIGGER -->
      <div style="font-size: 20px; font-weight: 700; color: #0a1928; margin: 0 0 20px 0;" class="dark-value">
        Dear ${data.title} ${data.fullName},
      </div>
      
      <div style="margin: 0 0 25px 0; line-height: 1.7; color: #333333; font-size: 16px;" class="dark-details">
        Thank you for registering for the <strong>Zimbabwe-China Investment Symposium</strong>! We are thrilled to have you join us for this historic event.
      </div>
      
      <!-- Details Card - BIGGER TEXT -->
      <div style="background: #f8f9fa; border-radius: 16px; padding: 24px; margin: 0 0 25px 0; border: 1px solid #e5e7eb;" class="dark-card">
        <div style="margin-bottom: 16px;">
          <div style="font-size: 14px; font-weight: 700; color: #6b7280; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;" class="dark-label">Full Name</div>
          <div style="font-size: 18px; font-weight: 700; color: #0a1928;" class="dark-value">${data.title} ${data.fullName}</div>
        </div>
        <div style="margin-bottom: 16px;">
          <div style="font-size: 14px; font-weight: 700; color: #6b7280; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;" class="dark-label">Organization</div>
          <div style="font-size: 18px; font-weight: 700; color: #0a1928;" class="dark-value">${data.organization}</div>
        </div>
        <div>
          <div style="font-size: 14px; font-weight: 700; color: #6b7280; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;" class="dark-label">Nationality</div>
          <div style="font-size: 18px; font-weight: 700; color: #0a1928;" class="dark-value">${data.nationality}</div>
        </div>
      </div>
      
      <!-- Info Section - BIGGER TEXT -->
      <div style="background: #f0f9ff; border-radius: 16px; padding: 22px; text-align: center; margin: 0 0 25px 0; border: 1px solid #d4af37;" class="dark-info">
        <div style="font-size: 17px; color: #1e3a5f; line-height: 1.8; font-weight: 500;" class="dark-details">
          <strong style="font-size: 18px; color: #0a1928;" class="dark-value">📌 IMPORTANT:</strong> Please present this email at the registration desk.<br><br>
          <strong>📅 Date:</strong> 2 July 2026<br>
          <strong>📍 Venue:</strong> Golden Conifer Conference Centre<br>
          <strong>📍 Address:</strong> 30 Quendon Rd, Harare, Zimbabwe<br>
          <strong>⏰ Time:</strong> 11:00 - 18:00
        </div>
      </div>
      
      <!-- Google Maps Link -->
      <div style="margin: 0 0 25px 0; text-align: center;">
        <a href="https://www.google.com/maps/search/?api=1&query=Golden+Conifer+Wedding+%26+Conference+Centre+30+Quendon+Rd+Harare" 
           style="display: inline-flex; align-items: center; gap: 10px; background: #f0f9ff; color: #1e3a5f; text-decoration: none; padding: 14px 24px; border-radius: 14px; font-weight: 700; font-size: 16px; border: 2px solid #d4af37;" class="dark-map-link">
          <span style="font-size: 20px;">🗺️</span> 
          View on Google Maps
        </a>
      </div>
      
      <!-- Important Notice - BIGGER TEXT -->
      <div style="background: #fef2f2; border-left: 6px solid #dc2626; padding: 18px 20px; border-radius: 10px; margin: 0 0 25px 0;" class="dark-important">
        <div style="color: #991b1b; font-size: 17px; margin: 0 0 10px 0; font-weight: 700;" class="dark-important-text">⚠️ What to bring:</div>
        <div style="color: #991b1b; font-size: 15px; margin: 0 0 6px 0; font-weight: 500;" class="dark-important-text">• This confirmation email (digital or printed)</div>
        <div style="color: #991b1b; font-size: 15px; margin: 0 0 6px 0; font-weight: 500;" class="dark-important-text">• Government-issued ID (passport or national ID)</div>
        <div style="color: #991b1b; font-size: 15px; margin: 0; font-weight: 500;" class="dark-important-text">• Business cards for networking</div>
      </div>
      
      <!-- Button - BIGGER -->
      <div style="text-align: center;">
        <a href="https://zimchinasymposium.com/schedule" style="display: inline-block; background: #dc2626; color: #ffffff; text-decoration: none; padding: 15px 36px; border-radius: 50px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(220,38,38,0.3);" class="dark-button">
          📋 View Full Schedule
        </a>
      </div>
    </td>
  </tr>
  
  <!-- Footer -->
  <tr>
    <td style="background: #f8f9fa; padding: 25px; text-align: center;" class="dark-footer">
      <div style="color: #6b7280; font-size: 12px; margin: 0 0 5px 0;" class="dark-footer-text">© 2026 Zimbabwe-China Investment Symposium. All rights reserved.</div>
      <div style="color: #6b7280; font-size: 12px; margin: 0;" class="dark-footer-text">Questions? <a href="mailto:registration@zimchinasymposium.com" style="color: #d4af37; text-decoration: none;" class="dark-link">registration@zimchinasymposium.com</a></div>
    </td>
  </tr>
`;

// Main function to get email
export const getConfirmationEmail = (data) => {
  const content = getEmailContent(data);
  return getEmailWrapper(content);
};