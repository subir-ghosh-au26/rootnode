import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const categories = ['All', 'Web', 'Mobile', 'Software'];

const projects = [
  {
    title: 'HealthPoint HMS',
    category: 'Web',
    desc: 'Full-stack hospital management system with patient records, billing, and appointment scheduling.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: 'from-brand to-mid',
  },
  {
    title: 'ShopEasy E-commerce',
    category: 'Web',
    desc: 'Feature-rich e-commerce platform with payment gateway integration and inventory management.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    color: 'from-accent to-accent-dark',
  },
  {
    title: 'FarmConnect App',
    category: 'Mobile',
    desc: 'Mobile app connecting farmers directly with buyers, featuring real-time market prices.',
    tech: ['React Native', 'Firebase', 'Maps API'],
    color: 'from-mid to-soft',
  },
  {
    title: 'EduTrack LMS',
    category: 'Software',
    desc: 'Learning management system with exams, assignments, live classes, and analytics dashboard.',
    tech: ['React', 'Express', 'Socket.io'],
    color: 'from-night-light to-brand',
  },
  {
    title: 'QuickBill POS',
    category: 'Software',
    desc: 'Point-of-sale billing software with WhatsApp integration and automated reminders.',
    tech: ['Electron', 'React', 'SQLite'],
    color: 'from-brand to-accent',
  },
  {
    title: 'TravelBengal',
    category: 'Mobile',
    desc: 'Tourism app showcasing West Bengal destinations with AR guides and offline maps.',
    tech: ['Flutter', 'Dart', 'Google Maps'],
    color: 'from-accent-dark to-mid',
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" ref={ref} className="relative py-24 lg:py-32 bg-paper grid-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-semibold mb-4 tracking-wide">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-6">
            Our <span className="text-brand">Work</span>
          </h2>
          <p className="text-night/60 max-w-2xl mx-auto text-lg">
            A showcase of projects that demonstrate our expertise and commitment to quality.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? 'bg-brand text-white shadow-lg shadow-brand/30'
                  : 'bg-white text-night/60 hover:text-brand hover:bg-brand/5 border border-brand/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-brand/8 transition-all duration-500 hover:-translate-y-2 border border-brand/5"
              >
                {/* Project Visual */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  <HiCode className="text-6xl text-white/20 group-hover:text-white/40 transition-all duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 cursor-pointer">
                      <HiExternalLink />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-night mb-2 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-night/55 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-2.5 py-1 text-xs bg-light text-brand rounded-md font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
