import React from 'react';

const Logo = () => {
  return (
    <svg width="500" height="80" viewBox="0 0 500 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4ff"/>
          <stop offset="25%" stopColor="#f7931e"/>
          <stop offset="50%" stopColor="#fff"/>
          <stop offset="100%" stopColor="#00d4ff"/>
        </radialGradient>
        <linearGradient id="lineGrad" x1="240" y1="70" x2="290" y2="55">
          <stop offset="0%" stopColor="#00d4ff"/>
          <stop offset="100%" stopColor="#fff"/>
        </linearGradient>
      </defs>
      {/* NAL Text */}
      <text x="20" y="55" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="#00d4ff">NAL</text>
      {/* Web Dynamics Text */}
      <text x="140" y="55" fontFamily="Arial, sans-serif" fontSize="24" fill="#fff">Web Dynamics</text>
      {/* Tech Symbol - Globe */}
      <circle cx="32" cy="70" r="10" fill="url(#globeGrad)" opacity="0.8"/>
      <path d="M 22 70 A 10 10 0 0 1 42 70 A 10 10 0 0 1 22 70" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M 32 60 A 10 10 0 0 1 32 80 A 10 10 0 0 1 32 60" stroke="#fff" strokeWidth="2" fill="none"/>

      {/* Dynamic wave lines for web representation */}
      <path d="M 44 65 Q 100 55 180 65 L 240 70" stroke="#00d4ff" strokeWidth="4" fill="none" opacity="0.6"/>
      <path d="M 44 72 Q 100 62 180 72 L 240 70" stroke="#5b8bf5" strokeWidth="3" fill="none" opacity="0.4"/>
      <path d="M 44 78 Q 100 68 180 78 L 240 70" stroke="#f7931e" strokeWidth="2" fill="none" opacity="0.5"/>
      {/* Single line attaching to s */}
      <path d="M 240 70 L 290 55" stroke="url(#lineGrad)" strokeWidth="4" fill="none" opacity="0.6"/>
      {/* Small web node circles in blue */}
      <circle cx="60" cy="63" r="3" fill="#00d4ff"/>
      {/* Small yellow accents */}
      <circle cx="120" cy="60" r="2" fill="#f7931e"/>
      {/* Small white elements */}
      <circle cx="200" cy="68" r="1.5" fill="#fff"/>
    </svg>
  );
};

export default Logo;
