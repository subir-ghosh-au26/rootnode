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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1"
          >
            <h1 className="font-heading mb-6">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">Rootnode</span>
              <span className="block text-xl sm:text-2xl font-bold text-soft/40 tracking-[0.3em] uppercase mt-2">Technologies</span>
            </h1>
            
            <div className="space-y-4 mb-10">
              <p className="text-lg sm:text-xl text-soft/80 font-medium">
                Web development · IT services · Digital products
              </p>
              <p className="text-xl sm:text-2xl text-accent font-semibold">
                Rooted here. Connected everywhere.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-10 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 text-lg"
              >
                rootnode.in →
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Logo/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Decorative radial glows */}
              <div className="absolute inset-0 bg-brand/30 rounded-full blur-[80px] animate-pulse" />
              <div className="relative z-10">
                <Logo size={window.innerWidth < 1024 ? 200 : 380} animate={true} />
              </div>
            </div>
          </motion.div>
        </div>

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
