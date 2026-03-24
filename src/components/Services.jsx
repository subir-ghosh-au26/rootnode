import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiCode, HiDeviceMobile, HiDesktopComputer, HiCloud, HiCog, HiChartBar } from 'react-icons/hi';

const services = [
  {
    icon: <HiCode className="text-3xl" />,
    title: 'Web Development',
    desc: 'Modern, responsive websites and web applications built with React, Next.js, and cutting-edge technologies.',
    features: ['Custom Websites', 'E-commerce Stores', 'Web Applications', 'CMS Solutions', 'Landing Pages', 'Progressive Web Apps'],
    gradient: 'from-brand to-mid',
  },
  {
    icon: <HiDeviceMobile className="text-3xl" />,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.',
    features: ['Android Apps', 'iOS Apps', 'React Native', 'Flutter Apps', 'App Maintenance', 'Play Store Publishing'],
    gradient: 'from-mid to-soft',
  },
  {
    icon: <HiDesktopComputer className="text-3xl" />,
    title: 'Software Development',
    desc: 'Custom software solutions tailored to your business needs — from ERP systems to SaaS platforms.',
    features: ['Custom ERP', 'SaaS Platforms', 'API Development', 'Database Design', 'Cloud Solutions', 'Automation Tools'],
    gradient: 'from-accent to-accent-dark',
  },
  {
    icon: <HiCloud className="text-3xl" />,
    title: 'Cloud & DevOps',
    desc: 'Deploy and scale your applications with modern cloud infrastructure and CI/CD pipelines.',
    features: ['AWS / Azure', 'Docker & K8s', 'CI/CD Pipelines', 'Server Management', 'Monitoring', 'Auto Scaling'],
    gradient: 'from-brand to-accent',
  },
  {
    icon: <HiChartBar className="text-3xl" />,
    title: 'Digital Marketing',
    desc: 'Grow your online presence with SEO, social media marketing, and data-driven strategies.',
    features: ['SEO Optimization', 'Social Media', 'Google Ads', 'Content Strategy', 'Analytics', 'Brand Building'],
    gradient: 'from-mid to-brand',
  },
  {
    icon: <HiCog className="text-3xl" />,
    title: 'IT Consulting',
    desc: 'Strategic technology guidance to help you make the right decisions for your business growth.',
    features: ['Tech Strategy', 'System Audit', 'Architecture Design', 'Team Training', 'Tech Support', 'Modernization'],
    gradient: 'from-accent-dark to-brand',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="relative py-24 lg:py-32 bg-night overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 tracking-wide">
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What We <span className="text-accent">Build</span>
          </h2>
          <p className="text-soft/60 max-w-2xl mx-auto text-lg">
            End-to-end digital solutions designed to transform your business and drive growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group glass-card rounded-2xl p-7 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/10 relative overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 text-white shadow-lg`}>
                {service.icon}
              </div>
              
              <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-soft/60 text-sm leading-relaxed mb-5">{service.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs bg-white/5 text-soft/70 rounded-full border border-white/5 hover:border-accent/30 hover:text-accent transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
