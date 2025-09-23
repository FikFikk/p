
import nodemailer from 'nodemailer';
import { contactEmailTemplate } from './contactEmailTemplate.js';

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    return { status: 405, message: 'Method Not Allowed' };
  }

  const body = await readBody(event);
  const { name, email, subject, message } = body || {};

  if (!name || !email || !subject || !message) {
    return { status: 400, message: 'All fields are required.' };
  }

  // SMTP config (from user)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'fikrigtt14@gmail.com',
      pass: 'usnmyauowtbilsmk',
    },
  });

  try {
    await transporter.sendMail({
      from: '"Contact Form FikFikk" <fikrigtt14@gmail.com>',
      to: 'fikri225456@gmail.com',
      subject: `[FikFikk Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: contactEmailTemplate({ name, email, subject, message }),
      replyTo: email, // Agar bisa langsung reply ke pengirim
    });
    return { status: 200, message: 'Message sent successfully!' };
  } catch (error) {
    return { status: 500, message: 'Failed to send email.', error: error.message };
  }
});
