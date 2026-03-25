import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { type, name, email, phone, service, message, conversation, total_messages } = req.body;

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,       // hello@rootnode.co.in
      pass: process.env.GMAIL_APP_PASSWORD // App Password from Google
    }
  });

  try {
    if (type === 'contact') {
      // Contact form submission
      await transporter.sendMail({
        from: `"Rootnode Website" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `📩 New Contact Form — ${name}`,
        html: `
          <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e1b4b, #4f46e5); padding: 24px; border-radius: 12px 12px 0 0;">
              <h2 style="color: white; margin: 0;">New Project Inquiry</h2>
              <p style="color: #a5b4fc; margin: 4px 0 0;">From rootnode.co.in contact form</p>
            </div>
            <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #64748b; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td></tr>
                ${phone ? `<tr><td style="padding: 8px 0; color: #64748b;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #4f46e5;">${phone}</a></td></tr>` : ''}
                ${service ? `<tr><td style="padding: 8px 0; color: #64748b;">Service</td><td style="padding: 8px 0;">${service}</td></tr>` : ''}
              </table>
              <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="color: #64748b; margin: 0 0 8px; font-size: 13px;">Project Details:</p>
                <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              <p style="color: #94a3b8; font-size: 12px; margin-top: 16px;">Sent from rootnode.co.in • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        `
      });
    } else if (type === 'chatbot') {
      // Chatbot transcript
      await transporter.sendMail({
        from: `"Rootnode Chatbot" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: `💬 Chatbot Conversation — ${total_messages} message${total_messages > 1 ? 's' : ''} • ${new Date().toLocaleDateString('en-IN')}`,
        html: `
          <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e1b4b, #4f46e5); padding: 24px; border-radius: 12px 12px 0 0;">
              <h2 style="color: white; margin: 0;">💬 Chatbot Conversation</h2>
              <p style="color: #a5b4fc; margin: 4px 0 0;">${total_messages} visitor message${total_messages > 1 ? 's' : ''}</p>
            </div>
            <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
              <pre style="white-space: pre-wrap; font-family: 'Segoe UI', sans-serif; line-height: 1.8; margin: 0; font-size: 14px;">${conversation}</pre>
              <p style="color: #94a3b8; font-size: 12px; margin-top: 16px; border-top: 1px solid #e2e8f0; padding-top: 12px;">Captured from rootnode.co.in chatbot • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        `
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
