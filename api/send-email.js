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
      // Contact form submission — Notify admin
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

      // Auto-reply — Thank you email to the visitor
      await transporter.sendMail({
        from: `"Rootnode Technologies" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Thank you, ${name}! We received your message 🚀`,
        html: `
          <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e1b4b, #4f46e5); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Thank You! 🎉</h1>
              <p style="color: #a5b4fc; margin: 8px 0 0; font-size: 15px;">We've received your message</p>
            </div>
            <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
              <p style="font-size: 16px; color: #1e1b4b; margin: 0 0 16px;">Hi <strong>${name}</strong>,</p>
              <p style="color: #475569; line-height: 1.7; margin: 0 0 16px;">
                Thank you for reaching out to <strong>Rootnode Technologies</strong>! We have received your inquiry and our team will review it carefully.
              </p>
              <div style="background: white; border-radius: 10px; padding: 20px; border: 1px solid #e2e8f0; margin: 16px 0;">
                <p style="color: #4f46e5; font-weight: 600; margin: 0 0 8px;">⏰ What happens next?</p>
                <ul style="color: #475569; line-height: 1.8; margin: 0; padding-left: 20px;">
                  <li>Our team will review your requirements</li>
                  <li>We'll get back to you within <strong>24 hours</strong></li>
                  <li>We may schedule a quick call to understand your project better</li>
                </ul>
              </div>
              <p style="color: #475569; line-height: 1.7; margin: 16px 0;">
                In the meantime, feel free to reach us on WhatsApp for a quicker response:
              </p>
              <div style="text-align: center; margin: 24px 0;">
                <a href="https://wa.me/917001034964" style="display: inline-block; background: #25d366; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">💬 Chat on WhatsApp</a>
              </div>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0; text-align: center;">
                Rootnode Technologies • Birbhum, West Bengal, India<br>
                <a href="https://rootnode.co.in" style="color: #4f46e5;">rootnode.co.in</a> • <a href="mailto:hello@rootnode.co.in" style="color: #4f46e5;">hello@rootnode.co.in</a>
              </p>
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
