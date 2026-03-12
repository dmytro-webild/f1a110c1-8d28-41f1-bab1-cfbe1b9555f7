import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
}

export default function SvgTextLogo({ text, className = '' }: SvgTextLogoProps) {
  return (
    <svg
      viewBox={`0 0 ${text.length * 60} 100`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-current font-bold text-lg"
      >
        {text}
      </text>
    </svg>
  );
}