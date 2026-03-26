import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FiExternalLink } from 'react-icons/fi';
import Logo from './Logo';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-night via-night-light to-brand animate-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mid/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #a5b4fc 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center mb-8"
        >
          <Logo size={120} animate={true} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
            <span className="block">Building Digital</span>
            <span className="block bg-gradient-to-r from-soft via-accent to-soft bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-soft/70 max-w-2xl mx-auto mb-4 font-light">
            From the Heart of Bengal
          </p>
          <p className="text-sm sm:text-base text-soft/50 max-w-xl mx-auto mb-10">
            We craft exceptional websites, mobile apps & custom software that transform businesses. Your vision, our code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 flex items-center gap-2"
          >
            Start Your Project
            <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border border-soft/30 text-soft hover:text-white hover:border-soft/60 font-semibold rounded-full transition-all duration-300 hover:-translate-y-1"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '30+', label: 'Happy Clients' },
            { number: '3+', label: 'Years Experience' },
            { number: '24/7', label: 'Support' },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent mb-1">{stat.number}</div>
              <div className="text-xs text-soft/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center text-soft/40 hover:text-soft/70 transition-colors"
        >
          <span className="text-xs mb-2 tracking-wider uppercase">Scroll</span>
          <HiArrowDown className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
