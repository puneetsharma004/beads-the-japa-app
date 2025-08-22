export default function CircularProgress({ 
  progress, 
  size, 
  strokeWidth = 4, 
  isStealthMode = false,
  children 
}) {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const progressColor = isStealthMode ? '#10B981' : '#F59E0B'; // Green for stealth, amber for normal
  const trackColor = isStealthMode ? '#374151' : '#92400E'; // Darker variants

  return (
    <div className="relative inline-block">
      {/* SVG Progress Ring */}
      <svg
        className="absolute inset-0 transform -rotate-90"
        width={size}
        height={size}
      >
        {/* Background track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
          opacity="0.3"
        />
        
        {/* Progress circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500 ease-out"
          style={{
            filter: `drop-shadow(0 0 6px ${progressColor}40)`
          }}
        />
      </svg>
      
      {/* Button content */}
      {children}
    </div>
  );
}
