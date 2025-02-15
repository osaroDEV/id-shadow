import React from 'react';

interface CircularProgressProps {
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
  const circleSize = 60;
  const strokeWidth = 4;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        className="transform -rotate-90"
        width={circleSize}
        height={circleSize}
      >
        <circle
          className="stroke-gray-200"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={circleSize / 2}
          cy={circleSize / 2}
        />
        <circle
          className="stroke-[#38C793] transition-all duration-1000 ease-in-out"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={circleSize / 2}
          cy={circleSize / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset
          }}
        />
      </svg>
      <div className="absolute text-xs font-semibold">
        {percentage}%
      </div>
    </div>
  );
};

export default CircularProgress;