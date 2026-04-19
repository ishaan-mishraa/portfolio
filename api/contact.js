import { Resend } from 'resend';

// Vercel will automatically read this from your project's Environment Variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, work } = req.body;

  try {
    // 1. Auto-responder to the user
    await resend.emails.send({
      from: 'Ishaan Mishra <hello@ishaanm.dev>',
      to: email,
      subject: 'Transmission Received!',
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for getting in touch through my portfolio. I've received your transmission and will review your project details shortly.</p>
        <p>Best,<br>Ishaan</p>
      `,
    });

    // 2. Notification forwarded to your personal Gmail
    await resend.emails.send({
      from: 'Mission Control <hello@ishaanm.dev>',
      to: 'ishaancodes01@gmail.com',
      subject: `New Mission Inquiry: ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Description:</strong><br/>${work}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}