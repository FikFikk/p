// contactEmailTemplate.js
export function contactEmailTemplate({ name, email, subject, message }) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form - FikFikk Portfolio</title>
    </head>
    <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="max-width: 600px; margin: 40px auto; padding: 0;">
        
        <!-- Header dengan gradient dan logo -->
        <div style="background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); padding: 32px 24px; border-radius: 24px 24px 0 0; text-align: center; position: relative; overflow: hidden;">
          <!-- Decorative circles -->
          <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.8;"></div>
          <div style="position: absolute; bottom: -30px; left: -30px; width: 80px; height: 80px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.6;"></div>
          
          <!-- Logo/Brand -->
          <div style="position: relative; z-index: 2;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              FikFikk Portfolio
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px; font-weight: 500;">
              Contact Form Message
            </p>
          </div>
        </div>

        <!-- Main Content -->
        <div style="background: white; padding: 32px 24px; border-radius: 0 0 24px 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
          
          <!-- New Message Badge -->
          <div style="display: inline-flex; align-items: center; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; margin-bottom: 24px;">
            📨 New Contact Message
          </div>

          <!-- Contact Details Card -->
          <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 16px; padding: 24px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
            <h3 style="margin: 0 0 16px 0; color: #1e293b; font-size: 18px; font-weight: 600;">Contact Details</h3>
            
            <div style="display: grid; gap: 12px;">
              <div style="display: flex; align-items: center;">
                <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                  <span style="color: white; font-size: 14px;">👤</span>
                </div>
                <div>
                  <div style="font-weight: 600; color: #374151; font-size: 14px;">Name</div>
                  <div style="color: #1e293b; font-size: 16px; font-weight: 500;">${name}</div>
                </div>
              </div>
              
              <div style="display: flex; align-items: center;">
                <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                  <span style="color: white; font-size: 14px;">✉️</span>
                </div>
                <div>
                  <div style="font-weight: 600; color: #374151; font-size: 14px;">Email</div>
                  <div style="color: #1e293b; font-size: 16px; font-weight: 500;">${email}</div>
                </div>
              </div>
              
              <div style="display: flex; align-items: center;">
                <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #f59e0b, #d97706); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                  <span style="color: white; font-size: 14px;">📝</span>
                </div>
                <div>
                  <div style="font-weight: 600; color: #374151; font-size: 14px;">Subject</div>
                  <div style="color: #1e293b; font-size: 16px; font-weight: 500;">${subject}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Message Content -->
          <div style="background: white; border: 2px solid #e2e8f0; border-radius: 16px; padding: 24px; margin-bottom: 32px;">
            <h3 style="margin: 0 0 16px 0; color: #1e293b; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
              <span style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; width: 28px; height: 28px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; margin-right: 8px; font-size: 14px;">💬</span>
              Message
            </h3>
            <div style="color: #374151; line-height: 1.6; font-size: 15px; background: #f8fafc; padding: 20px; border-radius: 12px; border-left: 4px solid #0ea5e9;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding-top: 24px; border-top: 1px solid #e5e7eb;">
            <div style="background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); padding: 16px; border-radius: 12px; margin-bottom: 16px;">
              <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500;">
                🚀 This message was sent from <strong>FikFikk Portfolio</strong> contact form
              </p>
              <p style="margin: 4px 0 0 0; color: #9ca3af; font-size: 12px;">
                Sent on ${new Date().toLocaleDateString('id-ID', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
            
            <div style="display: flex; justify-content: center; gap: 16px; margin-top: 16px;">
              <a href="https://github.com/fikfikk" style="text-decoration: none; color: #6b7280; font-size: 12px; display: flex; align-items: center;">
                🐙 GitHub
              </a>
              <a href="https://linkedin.com/in/mochammad-fikri-dwi-fardian" style="text-decoration: none; color: #6b7280; font-size: 12px; display: flex; align-items: center;">
                💼 LinkedIn
              </a>
              <a href="https://fikfikk.my.id" style="text-decoration: none; color: #6b7280; font-size: 12px; display: flex; align-items: center;">
                🌐 Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
