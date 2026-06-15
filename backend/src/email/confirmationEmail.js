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
    <td style="background: linear-gradient(135deg, #0a1928 0%, #1e3a5f 100%); padding: 30px 20px; text-align: center;">
      <div style="display: flex; justify-content: center; align-items: center; gap: 15px; margin-bottom: 20px; flex-wrap: wrap;">
        <div style="background: white; border-radius: 12px; padding: 8px 12px; display: inline-block;">
          <img src="${ZIMCHINA_LOGO}" alt="Zimbabwe-China Symposium" style="height: 40px; width: auto; display: block;">
        </div>
        <div style="background: white; border-radius: 12px; padding: 8px 12px; display: inline-block;">
          <img src="${AFRICAPACITI_LOGO}" alt="Africapaciti" style="height: 40px; width: auto; display: block;">
        </div>
        <div style="background: white; border-radius: 12px; padding: 8px 12px; display: inline-block;">
          <img src="${CHAMBER_LOGO}" alt="Chamber of Chinese Enterprises" style="height: 40px; width: auto; display: block;">
        </div>
      </div>
      
      <div style="font-size: 24px; font-weight: 700; color: #ffffff; margin: 0 0 8px 0; line-height: 1.3; background: transparent;">
        Registration Confirmed!
      </div>
      <div style="font-size: 15px; font-weight: 500; color: #d4af37; margin: 0; background: transparent;">
        Zimbabwe-China Investment Symposium 2026
      </div>
    </td>
  </tr>
  
  <!-- Content -->
  <tr>
    <td style="padding: 25px 20px; background: #ffffff;">
      <!-- Greeting -->
      <div style="font-size: 17px; font-weight: 600; color: #0a1928; margin: 0 0 20px 0;">
        Dear ${data.title} ${data.fullName},
      </div>
      
      <div style="margin: 0 0 20px 0; line-height: 1.6; color: #333333; font-size: 15px;">
        Thank you for registering for the <strong>Zimbabwe-China Investment Symposium</strong>! We are thrilled to have you join us for this historic event.
      </div>
      
      <!-- Details Card -->
      <div style="background: #f8f9fa; border-radius: 16px; padding: 20px; margin: 0 0 20px 0;">
        <div style="margin-bottom: 15px;">
          <div style="font-size: 13px; font-weight: 600; color: #6b7280; margin-bottom: 5px;">Full Name</div>
          <div style="font-size: 16px; font-weight: 700; color: #0a1928;">${data.title} ${data.fullName}</div>
        </div>
        <div style="margin-bottom: 15px;">
          <div style="font-size: 13px; font-weight: 600; color: #6b7280; margin-bottom: 5px;">Organization</div>
          <div style="font-size: 16px; font-weight: 700; color: #0a1928;">${data.organization}</div>
        </div>
        <div>
          <div style="font-size: 13px; font-weight: 600; color: #6b7280; margin-bottom: 5px;">Nationality</div>
          <div style="font-size: 16px; font-weight: 700; color: #0a1928;">${data.nationality}</div>
        </div>
      </div>
      
      <!-- Info Section -->
      <div style="background: #f0f9ff; border-radius: 16px; padding: 18px; text-align: center; margin: 0 0 20px 0;">
        <div style="font-size: 14px; color: #1e3a5f; line-height: 1.7;">
          <strong>📌 IMPORTANT:</strong> Please present this email at the registration desk.<br><br>
          <strong>📅 Date:</strong> 25 June 2026<br>
          <strong>📍 Venue:</strong> Golden Conifer Conference Centre<br>
          <strong>📍 Address:</strong> 30 Quendon Rd, Harare, Zimbabwe<br>
          <strong>⏰ Time:</strong> 11:00 - 18:00
        </div>
      </div>
      
      <!-- Google Maps Link - Same as your main page -->
      <div style="margin: 0 0 20px 0; text-align: center;">
        <a href="https://www.google.com/maps/search/?api=1&query=Golden+Conifer+Wedding+%26+Conference+Centre+30+Quendon+Rd+Harare" 
           style="display: inline-flex; align-items: center; gap: 8px; background: #f0f9ff; color: #1e3a5f; text-decoration: none; padding: 12px 20px; border-radius: 12px; font-weight: 500; font-size: 14px; border: 1px solid #d4af37;">
          <span style="font-size: 16px;">🗺️</span> 
          View on Google Maps
        </a>
      </div>
      
      <!-- Important Notice -->
      <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 12px; border-radius: 8px; margin: 0 0 20px 0;">
        <div style="color: #991b1b; font-size: 13px; margin: 0 0 8px 0; font-weight: 600;">⚠️ What to bring:</div>
        <div style="color: #991b1b; font-size: 13px; margin: 0 0 5px 0;">• This confirmation email (digital or printed)</div>
        <div style="color: #991b1b; font-size: 13px; margin: 0 0 5px 0;">• Government-issued ID (passport or national ID)</div>
        <div style="color: #991b1b; font-size: 13px; margin: 0;">• Business cards for networking</div>
      </div>
      
      <!-- Button -->
      <div style="text-align: center;">
        <a href="https://zimchinasymposium.com/schedule" style="display: inline-block; background: #dc2626; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: 600; font-size: 14px;">📋 View Full Schedule</a>
      </div>
    </td>
  </tr>
  
  <!-- Footer -->
  <tr>
    <td style="background: #f8f9fa; padding: 20px; text-align: center;">
      <div style="color: #6b7280; font-size: 11px; margin: 0 0 5px 0;">© 2026 Zimbabwe-China Investment Symposium. All rights reserved.</div>
      <div style="color: #6b7280; font-size: 11px; margin: 0;">Questions? <a href="mailto:registration@zimchinasymposium.com" style="color: #d4af37; text-decoration: none;">registration@zimchinasymposium.com</a></div>
    </td>
  </tr>
`;

// Main function to get email
export const getConfirmationEmail = (data) => {
  const content = getEmailContent(data);
  return getEmailWrapper(content);
};