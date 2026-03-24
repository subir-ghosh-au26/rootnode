const Logo = ({ size = 80, animate = true, className = '' }) => {
  const scale = size / 80;
  
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 80 80" width={size} height={size} className="drop-shadow-indigo-500/20">
        {/* Concentric rings */}
        <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/10" />
        <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/15" />
        <circle cx="40" cy="40" r="16" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />

        {/* Radial Connection Lines */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="40"
            y1="40"
            x2={40 + 35 * Math.cos((angle * Math.PI) / 180)}
            y2={40 + 35 * Math.sin((angle * Math.PI) / 180)}
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-white/20"
          />
        ))}

        {/* Orbiting Nodes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <circle
            key={angle}
            cx={40 + 35 * Math.cos((angle * Math.PI) / 180)}
            cy={40 + 35 * Math.sin((angle * Math.PI) / 180)}
            r="3.5"
            className="fill-soft"
          />
        ))}

        {/* Core Hub */}
        <circle cx="40" cy="40" r="12" className="fill-brand" />
        <circle cx="40" cy="40" r="5" fill="#e0e7ff" className={animate ? 'animate-pulse' : ''} />
      </svg>
    </div>
  );
};

export default Logo;
