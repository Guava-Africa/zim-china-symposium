// Logo URLs (from your frontend public folder)
const ZIMCHINA_LOGO = '../../../frontend/public/Zimchina.png';
const CHAMBER_LOGO = '../../../frontend/public/Chamber.png';

// Base email wrapper with logos
const getEmailWrapper = (content, nationality) => {
  const isChinese = nationality === 'Chinese';
  const languageAttr = isChinese ? 'zh-CN' : 'en';
  
  return `<!DOCTYPE html>
<html lang="${languageAttr}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${isChinese ? '注册确认 - 津巴布韦-中国投资研讨会' : 'Registration Confirmation - Zimbabwe-China Investment Symposium'}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 40px 20px;
    }
    
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      animation: fadeInUp 0.6s ease-out;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Hero Section with Gradient */
    .hero {
      background: linear-gradient(135deg, #0a1928 0%, #1e3a5f 50%, #0a1928 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);
      animation: shine 8s ease-in-out infinite;
    }
    
    @keyframes shine {
      0%, 100% { transform: translate(-30%, -30%); }
      50% { transform: translate(30%, 30%); }
    }
    
    .logos {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      margin-bottom: 25px;
      position: relative;
      z-index: 1;
    }
    
    .logo-item {
      background: white;
      border-radius: 20px;
      padding: 15px 25px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
    }
    
    .logo-item:hover {
      transform: scale(1.05);
    }
    
    .logo-item img {
      height: 60px;
      width: auto;
      display: block;
    }
    
    .hero h1 {
      color: #ffffff;
      font-size: 28px;
      font-weight: 700;
      margin-top: 20px;
      letter-spacing: -0.5px;
      position: relative;
      z-index: 1;
    }
    
    .hero p {
      color: #d4af37;
      font-size: 16px;
      margin-top: 10px;
      font-weight: 500;
      position: relative;
      z-index: 1;
    }
    
    /* Content Section */
    .content {
      padding: 40px 35px;
      background: white;
    }
    
    .greeting {
      font-size: 20px;
      font-weight: 600;
      color: #0a1928;
      margin-bottom: 20px;
      border-left: 4px solid #d4af37;
      padding-left: 15px;
    }
    
    /* VIP Card */
    .vip-card {
      background: linear-gradient(135deg, #fef5e7 0%, #fff9f0 100%);
      border: 2px solid #d4af37;
      border-radius: 20px;
      padding: 25px;
      margin: 25px 0;
      position: relative;
      overflow: hidden;
    }
    
    .vip-card::before {
      content: '⭐';
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 40px;
      opacity: 0.1;
    }
    
    .vip-badge {
      background: #d4af37;
      color: #0a1928;
      display: inline-block;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 15px;
    }
    
    .details-grid {
      display: grid;
      gap: 15px;
      margin-top: 20px;
    }
    
    .detail-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .detail-label {
      font-weight: 600;
      color: #4b5563;
      font-size: 14px;
    }
    
    .detail-value {
      font-weight: 700;
      color: #0a1928;
      font-size: 15px;
    }
    
    /* QR Code Section */
    .qr-section {
      background: #f3f4f6;
      border-radius: 16px;
      padding: 20px;
      text-align: center;
      margin: 25px 0;
      border: 2px dashed #d4af37;
    }
    
    .qr-code {
      background: white;
      display: inline-block;
      padding: 15px;
      border-radius: 16px;
      margin-bottom: 15px;
    }
    
    .qr-code span {
      font-size: 64px;
      display: block;
    }
    
    .instruction {
      font-size: 14px;
      color: #4b5563;
      line-height: 1.6;
    }
    
    .instruction strong {
      color: #0a1928;
      font-weight: 700;
    }
    
    /* Important Notice */
    .important-notice {
      background: #fef2f2;
      border-left: 4px solid #dc2626;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
    }
    
    .important-notice p {
      color: #991b1b;
      font-size: 13px;
      margin: 5px 0;
    }
    
    /* Button */
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
      color: white;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 50px;
      font-weight: 600;
      margin-top: 20px;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    
    .button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
    }
    
    /* Footer */
    .footer {
      background: #f9fafb;
      padding: 30px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
    }
    
    .footer p {
      color: #6b7280;
      font-size: 12px;
      margin: 5px 0;
    }
    
    .social-icons {
      margin: 15px 0;
    }
    
    .social-icons span {
      font-size: 20px;
      margin: 0 10px;
      cursor: pointer;
    }
    
    @media (max-width: 480px) {
      .logos {
        flex-direction: column;
        gap: 15px;
      }
      .content {
        padding: 25px 20px;
      }
      .detail-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
      }
    }
  </style>
</head>
<body>
  ${content}
</body>
</html>`;
};

// English version content
const getEnglishContent = (data) => `
  <div class="email-container">
    <div class="hero">
      <div class="logos">
        <div class="logo-item">
          <img src="${ZIMCHINA_LOGO}" alt="Zimbabwe-China Symposium">
        </div>
        <div class="logo-item">
          <img src="${CHAMBER_LOGO}" alt="Chamber of Chinese Enterprises">
        </div>
      </div>
      <h1>✨ Registration Confirmed! ✨</h1>
      <p>Zimbabwe-China Investment Symposium 2026</p>
    </div>
    
    <div class="content">
      <div class="greeting">
        Dear ${data.title} ${data.fullName},
      </div>
      
      <p style="margin-bottom: 15px; line-height: 1.6;">Thank you for registering for the <strong>Zimbabwe-China Investment Symposium</strong>! 🎉 We are thrilled to have you join us for this historic event.</p>
      
      <div class="vip-card">
        <div class="vip-badge">⭐ VIP ACCESS ⭐</div>
        <div class="details-grid">
          <div class="detail-row">
            <span class="detail-label">Registration ID:</span>
            <span class="detail-value">#${data.id}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Name:</span>
            <span class="detail-value">${data.title} ${data.fullName}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Organization:</span>
            <span class="detail-value">${data.organization}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Nationality:</span>
            <span class="detail-value">${data.nationality}</span>
          </div>
        </div>
      </div>
      
      <div class="qr-section">
        <div class="qr-code">
          <span>🎟️</span>
        </div>
        <div class="instruction">
          <strong>📌 IMPORTANT:</strong> Please present this email (digital or printed) at the registration desk.<br>
          <strong>📅 Date:</strong> 25 June 2026<br>
          <strong>📍 Venue:</strong> Golden Conifer Conference Centre, 30 Quendon Rd, Harare<br>
          <strong>⏰ Time:</strong> 08:00 - 18:00
        </div>
      </div>
      
      <div class="important-notice">
        <p>⚠️ <strong>What to bring:</strong></p>
        <p>• This confirmation email (digital or printed)</p>
        <p>• Government-issued ID (passport or national ID)</p>
        <p>• Business cards for networking</p>
      </div>
      
      <div style="text-align: center;">
        <a href="https://zimchinasymposium.com/schedule" class="button">📋 View Full Schedule</a>
      </div>
    </div>
    
    <div class="footer">
      <div class="social-icons">
        <span>📘</span> <span>🐦</span> <span>📸</span> <span>💼</span>
      </div>
      <p>© 2026 Zimbabwe-China Investment Symposium. All rights reserved.</p>
      <p>Questions? Contact us at <a href="mailto:registration@zimchinasymposium.com" style="color: #d4af37;">registration@zimchinasymposium.com</a></p>
      <p>Golden Conifer Conference Centre | Harare, Zimbabwe</p>
    </div>
  </div>
`;

// Chinese version content
const getChineseContent = (data) => `
  <div class="email-container">
    <div class="hero">
      <div class="logos">
        <div class="logo-item">
          <img src="${ZIMCHINA_LOGO}" alt="津巴布韦-中国投资研讨会">
        </div>
        <div class="logo-item">
          <img src="${CHAMBER_LOGO}" alt="中国企业商会">
        </div>
      </div>
      <h1>✨ 注册确认！ ✨</h1>
      <p>津巴布韦-中国投资研讨会 2026</p>
    </div>
    
    <div class="content">
      <div class="greeting">
        尊敬的 ${data.title} ${data.fullName}，
      </div>
      
      <p style="margin-bottom: 15px; line-height: 1.6;">感谢您注册参加<strong>津巴布韦-中国投资研讨会</strong>！🎉 我们非常高兴您能参与这一历史性盛会。</p>
      
      <div class="vip-card">
        <div class="vip-badge">⭐ VIP 通道 ⭐</div>
        <div class="details-grid">
          <div class="detail-row">
            <span class="detail-label">注册编号：</span>
            <span class="detail-value">#${data.id}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">姓名：</span>
            <span class="detail-value">${data.title} ${data.fullName}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">机构：</span>
            <span class="detail-value">${data.organization}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">国籍：</span>
            <span class="detail-value">${data.nationality}</span>
          </div>
        </div>
      </div>
      
      <div class="qr-section">
        <div class="qr-code">
          <span>🎟️</span>
        </div>
        <div class="instruction">
          <strong>📌 重要提示：</strong> 请在签到处出示此邮件（电子版或打印版均可）。<br>
          <strong>📅 日期：</strong> 2026年6月25日<br>
          <strong>📍 地点：</strong> Golden Conifer 会议中心，30 Quendon Rd，哈拉雷<br>
          <strong>⏰ 时间：</strong> 08:00 - 18:00
        </div>
      </div>
      
      <div class="important-notice">
        <p>⚠️ <strong>请携带以下物品：</strong></p>
        <p>• 此确认邮件（电子版或打印版）</p>
        <p>• 政府颁发的身份证件（护照或身份证）</p>
        <p>• 用于交流的名片</p>
      </div>
      
      <div style="text-align: center;">
        <a href="https://zimchinasymposium.com/schedule" class="button">📋 查看完整议程</a>
      </div>
    </div>
    
    <div class="footer">
      <div class="social-icons">
        <span>📘</span> <span>🐦</span> <span>📸</span> <span>💼</span>
      </div>
      <p>© 2026 津巴布韦-中国投资研讨会。保留所有权利。</p>
      <p>如有疑问，请联系我们：<a href="mailto:registration@zimchinasymposium.com" style="color: #d4af37;">registration@zimchinasymposium.com</a></p>
      <p>Golden Conifer 会议中心 | 津巴布韦哈拉雷</p>
    </div>
  </div>
`;

// Main function to get email based on nationality
export const getConfirmationEmail = (data) => {
  const isChinese = data.nationality === 'Chinese';
  const content = isChinese ? getChineseContent(data) : getEnglishContent(data);
  return getEmailWrapper(content, data.nationality);
};

// Admin notification email (English only)
export const getAdminNotificationHtml = (data) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>New Registration</title>
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f4f4f4; margin: 0; padding: 20px; }
      .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
      .header { background: linear-gradient(135deg, #0a1928, #1e3a5f); color: white; padding: 30px; text-align: center; }
      .content { padding: 30px; }
      .detail-row { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
      .detail-label { font-weight: bold; color: #555; width: 150px; display: inline-block; }
      .badge { background: #d4af37; color: #0a1928; display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 20px; }
      .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #666; }
      .button { display: inline-block; background: #dc2626; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>🆕 New Symposium Registration</h2>
      </div>
      <div class="content">
        <div class="badge">${data.nationality === 'Chinese' ? '🇨🇳 Chinese Delegation' : '🌍 International Delegation'}</div>
        
        <div class="detail-row"><span class="detail-label">Registration ID:</span> ${data.id}</div>
        <div class="detail-row"><span class="detail-label">Name:</span> ${data.title} ${data.fullName}</div>
        <div class="detail-row"><span class="detail-label">Email:</span> ${data.email}</div>
        <div class="detail-row"><span class="detail-label">Phone:</span> ${data.phone}</div>
        <div class="detail-row"><span class="detail-label">Organization:</span> ${data.organization}</div>
        <div class="detail-row"><span class="detail-label">Nationality:</span> ${data.nationality}</div>
        <div class="detail-row"><span class="detail-label">National ID:</span> ${data.nationalId}</div>
        
        <div style="text-align: center; margin-top: 30px;">
          <a href="https://your-admin-panel.com/registrations/${data.id}" class="button">View in Admin Panel →</a>
        </div>
      </div>
      <div class="footer">
        <p>Zimbabwe-China Investment Symposium | 25 June 2026</p>
      </div>
    </div>
  </body>
  </html>
`;