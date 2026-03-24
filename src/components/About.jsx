import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiLightBulb, HiUserGroup, HiGlobe } from 'react-icons/hi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32 bg-paper grid-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-semibold mb-4 tracking-wide">
            About Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-6">
            Technology Rooted in <span className="text-brand">Innovation</span>
          </h2>
          <p className="text-night/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Born in a village of West Bengal, Rootnode Technologies is on a mission to bring world-class 
            digital solutions to businesses everywhere. We believe great technology shouldn't be limited by geography.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <HiLightBulb className="text-3xl" />,
              title: 'Innovation First',
              desc: 'We stay ahead of the curve with cutting-edge technologies — React, Node.js, Flutter, AI — delivering solutions that are future-proof.',
              color: 'brand',
            },
            {
              icon: <HiUserGroup className="text-3xl" />,
              title: 'Client-Centric',
              desc: 'Every project starts with understanding your vision. We don\'t just build products — we build partnerships that grow with your business.',
              color: 'accent',
            },
            {
              icon: <HiGlobe className="text-3xl" />,
              title: 'Global Quality, Local Roots',
              desc: 'From our base in West Bengal, we deliver international-standard software at competitive pricing. Quality without compromise.',
              color: 'mid',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card-light rounded-2xl p-8 hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-6 text-${item.color} group-hover:bg-${item.color} group-hover:text-white transition-all duration-300`}>
                {item.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-night mb-3">{item.title}</h3>
              <p className="text-night/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 bg-gradient-to-r from-night to-brand rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">Our Story</h3>
              <p className="text-soft/80 leading-relaxed mb-6">
                Founded with a vision to prove that world-class technology can emerge from anywhere, 
                Rootnode Technologies started as a small team with big dreams. Today, we serve clients 
                across India and beyond, building everything from stunning websites to complex enterprise software.
              </p>
              <p className="text-soft/80 leading-relaxed">
                Our name says it all — we are the <span className="text-accent font-semibold">root node</span> of 
                your digital infrastructure, the foundation upon which your business grows.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100%', label: 'Project Completion' },
                { value: '5★', label: 'Client Rating' },
                { value: 'India', label: 'Based In' },
                { value: '∞', label: 'Passion' },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-xl p-5 text-center">
                  <div className="text-2xl font-heading font-bold text-accent">{stat.value}</div>
                  <div className="text-xs text-soft/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
