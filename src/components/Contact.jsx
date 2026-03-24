import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit to Formspree
    setStatus('loading');

    fetch('https://formspree.io/f/mojkgrnk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      })
    })
      .then(response => {
        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'))
      .finally(() => {
        setTimeout(() => {
          if (status === 'success' || status === 'error') setStatus('');
        }, 5000);
      });
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus('');
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32 bg-paper grid-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-semibold mb-4 tracking-wide">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-6">
            Let's Build <span className="text-brand">Together</span>
          </h2>
          <p className="text-night/60 max-w-2xl mx-auto text-lg">
            Have a project in mind? Get in touch and let's turn your ideas into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-brand/5 border border-brand/5"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-night mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-light/50 border border-brand/10 text-night placeholder-night/30 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-night mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-light/50 border border-brand/10 text-night placeholder-night/30 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/30 transition-all"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-night mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-light/50 border border-brand/10 text-night placeholder-night/30 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-night mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-light/50 border border-brand/10 text-night focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/30 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="software">Software Development</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="consulting">IT Consulting</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-night mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project, timeline, and budget..."
                  className="w-full px-4 py-3 rounded-xl bg-light/50 border border-brand/10 text-night placeholder-night/30 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/30 transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm font-medium">Please fill in all required fields.</p>
              )}
              {status === 'success' && (
                <p className="text-accent text-sm font-medium">✓ Message sent! We'll get back to you shortly.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-mid text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <HiPaperAirplane className={`rotate-90 ${status === 'loading' ? 'animate-pulse' : ''}`} />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {[
              {
                icon: <HiLocationMarker className="text-xl" />,
                title: 'Our Office',
                lines: ['West Bengal, India'],
                color: 'brand',
              },
              {
                icon: <HiMail className="text-xl" />,
                title: 'Email Us',
                lines: ['[EMAIL_ADDRESS]', '[EMAIL_ADDRESS]'],
                color: 'mid',
                link: 'mailto:[EMAIL_ADDRESS]',
              },
              {
                icon: <HiPhone className="text-xl" />,
                title: 'Call Us',
                lines: ['+91 7001034964'],
                color: 'accent',
                link: 'tel:+917001034964',
              },
              {
                icon: <FaWhatsapp className="text-xl" />,
                title: 'WhatsApp',
                lines: ['+91 7001034964'],
                color: 'accent',
                link: 'https://wa.me/917001034964',
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link || '#'}
                target={item.link?.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-6 hover:shadow-lg hover:shadow-brand/5 hover:-translate-y-1 transition-all duration-300 border border-brand/5 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl bg-${item.color}/10 text-${item.color} flex items-center justify-center shrink-0 group-hover:bg-${item.color} group-hover:text-white transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-night text-sm mb-1">{item.title}</h4>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-night/55 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              </a>
            ))}

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-brand to-mid rounded-2xl p-6 text-center">
              <p className="text-white/90 text-sm mb-4">Prefer a quick call? We'd love to hear from you!</p>
              <a
                href="https://wa.me/917001034964?text=Hi%20Rootnode!%20I%20need%20a%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg text-sm"
              >
                <FaWhatsapp className="text-lg" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
