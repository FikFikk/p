
// Contact API using Formspree for GitHub Pages compatibility
// Optimized for performance and reliability

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqaykppa';

export default defineEventHandler(async (event) => {
  // CORS headers for cross-origin requests
  setHeaders(event, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });

  // Handle OPTIONS preflight request
  if (event.method === 'OPTIONS') {
    return new Response(null, { status: 200 });
  }

  // Only allow POST method
  if (event.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    });
  }

  try {
    const body = await readBody(event);
    const { name, email, subject, message } = body || {};

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Please enter a valid email address'
      });
    }

    // Prepare data for Formspree
    const formData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      _subject: `[FikFikk Portfolio] ${subject.trim()}`,
      _replyto: email.trim(),
    };

    // Send to Formspree
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw createError({
        statusCode: response.status,
        statusMessage: errorData.error || 'Failed to send message'
      });
    }

    // Success response
    return {
      status: 200,
      message: 'Message sent successfully! I will get back to you soon.',
    };

  } catch (error) {
    // Log error for debugging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.error('Contact form error:', error);
    }

    // Re-throw if it's already a createError
    if (error.statusCode) {
      throw error;
    }

    // Generic error response
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error. Please try again later.'
    });
  }
});
