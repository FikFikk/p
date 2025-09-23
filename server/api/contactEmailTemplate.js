// contactEmailTemplate.js
export function contactEmailTemplate({ name, email, subject, message }) {
  return `
    <div style="font-family: Arial, sans-serif; color: #222; background: #f9f9f9; padding: 24px; border-radius: 12px; max-width: 600px; margin: auto;">
      <h2 style="color: #0ea5e9; margin-bottom: 16px;">New Contact Message</h2>
      <table style="width: 100%; margin-bottom: 24px;">
        <tr>
          <td style="font-weight: bold; width: 120px;">Name:</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td style="font-weight: bold;">Email:</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td style="font-weight: bold;">Subject:</td>
          <td>${subject}</td>
        </tr>
      </table>
      <div style="margin-bottom: 12px; font-weight: bold;">Message:</div>
      <div style="background: #fff; border-radius: 8px; padding: 16px; border: 1px solid #e0e0e0; color: #333;">
        ${message.replace(/\n/g, '<br/>')}
      </div>
      <div style="margin-top: 32px; font-size: 13px; color: #888;">This message was sent from your portfolio contact form.</div>
    </div>
  `;
}
