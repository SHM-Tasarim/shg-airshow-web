import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-24 w-auto" }) => {
  return (
    <div className={`flex items-center justify-center p-1 ${className}`}>
      <img 
        src="/images/shg-airshow-2027.png" 
        alt="SHG Airshow 2027 Logo" 
        className="max-h-full w-auto object-contain"
        onError={(e) => {
          const target = e.currentTarget;
          target.onerror = null; 
          target.src = "/images/shg-airshow-2027.png";
        }}
      />
    </div>
  );
};

export default Logo;