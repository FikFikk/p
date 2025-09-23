
// Contact API - Secure version with environment variables
// SMTP credentials moved to .env file for security

export default defineEventHandler(async (event) => {
  // Only allow POST method
  if (event.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    });
  }

  const body = await readBody(event);
  const { name, email, subject, message } = body || {};

  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'All fields are required'
    });
  }

  // For GitHub Pages static deployment, API routes don't work properly
  // This is a limitation of static hosting
  // Alternative solutions:
  // 1. Use Formspree: https://formspree.io/
  // 2. Use EmailJS: https://www.emailjs.com/
  // 3. Use Netlify Forms (if hosted on Netlify)
  // 4. Use Vercel with serverless functions
  
  console.log('Contact form submission:', { name, email, subject, message });
  
  return { 
    status: 200, 
    message: 'Thank you for your message! Please contact me directly via email: fikri225456@gmail.com or WhatsApp: +6285157584466' 
  };
});
