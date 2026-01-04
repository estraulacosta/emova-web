import React from "react";

interface EsferasFase2Props {
  size1?: number;
  size2?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const EsferasFase2: React.FC<EsferasFase2Props> = ({
  size1 = 80,
  size2 = 160,
  color1 = "#5B4AE0",
  color2 = "#B9C85E",
  className = "",
}) => (
  <svg
    width={size2 + size1 + 20}
    height={size2 + 10}
    viewBox={`0 0 ${size2 + size1 + 20} ${size2 + 10}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Esfera pequeña */}
    <circle
      cx={size1 / 2 + 10}
      cy={size2 / 2 + 20}
      r={size1 / 2}
      fill={color1}
      fillOpacity={0.85}
    />
    {/* Esfera grande */}
    <circle
      cx={size1 + size2 / 2 + 10}
      cy={size2 / 2 + 10}
      r={size2 / 2}
      fill={color2}
      fillOpacity={0.85}
    />
  </svg>
);

export default EsferasFase2;
