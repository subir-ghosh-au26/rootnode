import Logo from './Logo';
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub } from 'react-icons/fa';
import { HiChevronUp } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-night text-white overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Logo size={36} animate={false} />
              <div>
                <div className="font-heading font-bold text-lg text-white">Rootnode Technologies</div>
                <div className="text-soft/60 text-[9px] font-medium leading-tight">Rooted here. Connected everywhere.</div>
              </div>
            </div>
            <p className="text-soft/50 text-sm leading-relaxed mb-6">
              Building digital solutions from the heart of Bengal. We transform ideas into powerful,
              scalable technology products.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaWhatsapp />, href: 'https://wa.me/919476148884', label: 'WhatsApp' },
                { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
                { icon: <FaInstagram />, href: '#', label: 'Instagram' },
                { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
                { icon: <FaGithub />, href: '#', label: 'GitHub' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-soft/50 hover:bg-brand hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-5 text-white/80">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Mobile App Development', 'Software Development', 'Cloud & DevOps', 'Digital Marketing', 'IT Consulting'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-soft/40 hover:text-accent text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-5 text-white/80">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Work', href: '#portfolio' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-soft/40 hover:text-accent text-sm transition-colors duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-5 text-white/80">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node.js', 'Flutter', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 text-xs bg-white/5 text-soft/50 rounded-lg border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-soft/30 text-xs">
            © {new Date().getFullYear()} Rootnode Technologies. All rights reserved. Made with ❤️
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-soft/40 hover:bg-brand hover:text-white transition-all duration-300"
            aria-label="Scroll to top"
          >
            <HiChevronUp className="text-lg" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
