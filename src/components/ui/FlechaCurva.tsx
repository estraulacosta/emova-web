import React from "react";

interface FlechaCurvaProps {
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const FlechaCurva: React.FC<FlechaCurvaProps> = ({
  color = "#222",
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width="100%"
    height="120"
    viewBox="0 0 1000 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ minWidth: 320, maxWidth: 1000 }}
  >
    {/* Flecha de arriba derecha a abajo izquierda */}
    <path
      d="M950 20 Q950 110 500 110 Q50 110 50 100"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray="8 6"
      fill="none"
    />
    <polyline
      points="50,100 60,110 50,120"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export default FlechaCurva;
