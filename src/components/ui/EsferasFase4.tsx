import React from "react";

interface EsferasFase4Props {
  color?: string;
  sphereRadius?: number;
  className?: string;
}

const EsferasFase4: React.FC<EsferasFase4Props> = ({
  color = "#B9C85E",
  sphereRadius = 32,
  className = "",
}) => {
  const gap = 32;
  const center = 2 * sphereRadius + gap;
  return (
    <svg
      width={center * 2}
      height={center * 2}
      viewBox={`0 0 ${center * 2} ${center * 2}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Centro */}
      <circle cx={center} cy={center} r={sphereRadius} fill={color} fillOpacity={0.85} />
      {/* Arriba */}
      <circle cx={center} cy={center - (sphereRadius + gap)} r={sphereRadius} fill={color} fillOpacity={0.85} />
      {/* Abajo */}
      <circle cx={center} cy={center + (sphereRadius + gap)} r={sphereRadius} fill={color} fillOpacity={0.85} />
      {/* Izquierda */}
      <circle cx={center - (sphereRadius + gap)} cy={center} r={sphereRadius} fill={color} fillOpacity={0.85} />
      {/* Derecha */}
      <circle cx={center + (sphereRadius + gap)} cy={center} r={sphereRadius} fill={color} fillOpacity={0.85} />
    </svg>
  );
};

export default EsferasFase4;
