import React from "react";

interface EsferaDobleProps {
  size?: number;
  color1?: string;
  color2?: string;
  opacity1?: number;
  opacity2?: number;
  className?: string;
}

const EsferaDoble: React.FC<EsferaDobleProps> = ({
  size = 140,
  color1 = "#5B4AE0", // Verde 1 (ajustar si tienes el color exacto)
  color2 = "#05DBED", // Verde 2 (ajustar si tienes el color exacto)
  opacity1 = 0.85,
  opacity2 = 0.85,
  className = "",
}) => (
  <svg
    width={size * 2}
    height={size}
    viewBox={`0 0 ${size * 2} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx={size * 0.7}
      cy={size / 2}
      r={size / 2}
      fill={color1}
      fillOpacity={opacity1}
    />
    <circle
      cx={size * 1.3}
      cy={size / 2}
      r={size / 2}
      fill={color2}
      fillOpacity={opacity2}
    />
  </svg>
);

export default EsferaDoble;
