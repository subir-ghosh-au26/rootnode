import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Owner, Kumar Electronics',
    text: 'Rootnode Technologies built an amazing e-commerce website for my electronics store. Sales have increased by 40% since we went online. Their team is incredibly responsive and professional.',
    rating: 5,
  },
  {
    name: 'Priya Banerjee',
    role: 'Director, EduBright Academy',
    text: 'The learning management system they developed for our coaching center is outstanding. Students and teachers love using it. The exam module is exactly what we needed.',
    rating: 5,
  },
  {
    name: 'Amit Das',
    role: 'CEO, GreenFarm Organics',
    text: 'The mobile app connecting farmers with buyers has transformed our business model. The real-time pricing feature is a game-changer. Highly recommend their team!',
    rating: 5,
  },
  {
    name: 'Sneha Ghosh',
    role: 'Manager, WB Tourism Board',
    text: 'Their tourism app for West Bengal is beautiful and functional. The AR guide feature and offline maps make it perfect for tourists. Excellent attention to detail.',
    rating: 5,
  },
  {
    name: 'Debashis Roy',
    role: 'Founder, QuickServe Restaurant',
    text: 'The POS system with WhatsApp billing integration has made our operations so much smoother. Customer feedback has been overwhelmingly positive. Great work!',
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-br from-night via-night-light to-brand overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 tracking-wide">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients <span className="text-accent">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <HiStar key={i} className="text-yellow-400 text-xl" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white font-bold text-lg mb-3">
                {testimonials[current].name.charAt(0)}
              </div>
              <div className="font-heading font-bold text-white text-lg">{testimonials[current].name}</div>
              <div className="text-soft/60 text-sm">{testimonials[current].role}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/15 transition-all"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="text-lg" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-accent' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/15 transition-all"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="text-lg" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
