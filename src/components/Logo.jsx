const Logo = ({ size = 80, animate = true, className = '' }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width={size} height={size}>
        {/* Background Rings */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e7ff" strokeWidth="0.5" opacity="0.1" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="#e0e7ff" strokeWidth="0.5" opacity="0.2" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="#e0e7ff" strokeWidth="0.5" opacity="0.3" />

        {/* Diagonal Cross Lines */}
        <line x1="20" y1="20" x2="80" y2="80" stroke="#a5b4fc" strokeWidth="1" opacity="0.2" />
        <line x1="80" y1="20" x2="20" y2="80" stroke="#a5b4fc" strokeWidth="1" opacity="0.2" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="#a5b4fc" strokeWidth="1" opacity="0.2" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="#a5b4fc" strokeWidth="1" opacity="0.2" />

        {/* Outer Nodes */}
        {[
          { cx: 50, cy: 10 }, { cx: 50, cy: 90 },
          { cx: 10, cy: 50 }, { cx: 90, cy: 50 },
          { cx: 22, cy: 22 }, { cx: 78, cy: 22 },
          { cx: 22, cy: 78 }, { cx: 78, cy: 78 }
        ].map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="4.5"
            fill="#a5b4fc"
            className="drop-shadow-sm"
          />
        ))}

        {/* Core Hub */}
        <circle cx="50" cy="50" r="16" fill="#4f46e5" />
        <circle 
          cx="50" 
          cy="50" 
          r="6" 
          fill="#ffffff" 
          className={animate ? 'animate-pulse' : ''} 
        />
      </svg>
    </div>
  );
};

export default Logo;
