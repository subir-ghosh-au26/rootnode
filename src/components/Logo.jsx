const Logo = ({ size = 80, animate = true, className = '' }) => {
  const scale = size / 80;
  
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 80 80" width={size} height={size} className="drop-shadow-lg">
        {/* Outer orbit ring */}
        <circle cx="40" cy="40" r="35" fill="none" stroke="#a5b4fc" strokeWidth={1.5 / scale > 1 ? 1 : 1.5 / scale} opacity="0.3" className={animate ? 'animate-orbit' : ''} style={{ transformOrigin: '40px 40px' }} />
        
        {/* Mid orbit ring */}
        <circle cx="40" cy="40" r="25" fill="none" stroke="#6366f1" strokeWidth={1.2} opacity="0.5" className={animate ? 'animate-orbit-reverse' : ''} style={{ transformOrigin: '40px 40px' }} />
        
        {/* Inner ring */}
        <circle cx="40" cy="40" r="15" fill="none" stroke="#4f46e5" strokeWidth="2" opacity="0.8" />
        
        {/* Core circle */}
        <circle cx="40" cy="40" r="10" fill="#4f46e5" />
        <circle cx="40" cy="40" r="10" fill="url(#coreGradient)" />
        
        {/* Center dot */}
        <circle cx="40" cy="40" r="4" fill="white" className={animate ? 'animate-pulse-glow' : ''} style={{ transformOrigin: '40px 40px' }} />
        
        {/* Cardinal nodes */}
        <circle cx="40" cy="5" r="3" fill="#a5b4fc" opacity="0.9" />
        <circle cx="40" cy="75" r="3" fill="#a5b4fc" opacity="0.9" />
        <circle cx="5" cy="40" r="3" fill="#a5b4fc" opacity="0.9" />
        <circle cx="75" cy="40" r="3" fill="#a5b4fc" opacity="0.9" />
        
        {/* Diagonal nodes */}
        <circle cx="15.2" cy="15.2" r="2.5" fill="#6366f1" opacity="0.7" />
        <circle cx="64.8" cy="15.2" r="2.5" fill="#6366f1" opacity="0.7" />
        <circle cx="15.2" cy="64.8" r="2.5" fill="#6366f1" opacity="0.7" />
        <circle cx="64.8" cy="64.8" r="2.5" fill="#6366f1" opacity="0.7" />
        
        {/* Connecting lines */}
        <line x1="40" y1="5" x2="40" y2="75" stroke="#a5b4fc" strokeWidth="0.5" opacity="0.2" />
        <line x1="5" y1="40" x2="75" y2="40" stroke="#a5b4fc" strokeWidth="0.5" opacity="0.2" />
        <line x1="15.2" y1="15.2" x2="64.8" y2="64.8" stroke="#6366f1" strokeWidth="0.4" opacity="0.15" />
        <line x1="64.8" y1="15.2" x2="15.2" y2="64.8" stroke="#6366f1" strokeWidth="0.4" opacity="0.15" />
        
        <defs>
          <radialGradient id="coreGradient" cx="40" cy="40" r="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
