import React from "react";

interface EsferasFase3Props {
  count?: number;
  radius?: number;
  sphereRadius?: number;
  color?: string;
  className?: string;
}

const EsferasFase3: React.FC<EsferasFase3Props> = ({
  count = 8,
  radius = 90,
  sphereRadius = 32,
  color = "#B9C85E",
  className = "",
}) => {
  const spheres = Array.from({ length: count });
  const center = radius + sphereRadius;
  const svgSize = (radius + sphereRadius) * 2;
  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {spheres.map((_, i) => {
        const angle = (2 * Math.PI * i) / count;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={sphereRadius}
            fill={color}
            fillOpacity={0.85}
          />
        );
      })}
    </svg>
  );
};

export default EsferasFase3;
