import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiShieldCheck, HiCurrencyRupee, HiClock, HiSupport, HiSparkles, HiRefresh } from 'react-icons/hi';

const features = [
  {
    icon: <HiShieldCheck className="text-2xl" />,
    title: 'Quality Code',
    desc: 'Clean, maintainable, well-documented code following industry best practices and standards.',
  },
  {
    icon: <HiCurrencyRupee className="text-2xl" />,
    title: 'Affordable Pricing',
    desc: 'Enterprise-quality solutions at startup-friendly prices. Maximum value for your investment.',
  },
  {
    icon: <HiClock className="text-2xl" />,
    title: 'On-Time Delivery',
    desc: 'We respect deadlines. Agile methodology ensures your project ships on schedule, every time.',
  },
  {
    icon: <HiSupport className="text-2xl" />,
    title: '24/7 Support',
    desc: 'Round-the-clock technical support and maintenance to keep your applications running smoothly.',
  },
  {
    icon: <HiSparkles className="text-2xl" />,
    title: 'Modern Tech Stack',
    desc: 'We use the latest technologies — React, Node.js, Flutter, AWS — for future-proof solutions.',
  },
  {
    icon: <HiRefresh className="text-2xl" />,
    title: 'Agile Process',
    desc: 'Iterative development with regular demos and feedback loops. You\'re in control at every step.',
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-semibold mb-4 tracking-wide">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-night mb-6">
            The Rootnode <span className="text-brand">Advantage</span>
          </h2>
          <p className="text-night/60 max-w-2xl mx-auto text-lg">
            We combine technical excellence with a client-first approach to deliver results that exceed expectations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-white rounded-2xl p-7 hover:shadow-xl hover:shadow-brand/8 hover:-translate-y-1 transition-all duration-500 group border border-brand/5"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-night mb-2">{item.title}</h3>
              <p className="text-night/55 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
