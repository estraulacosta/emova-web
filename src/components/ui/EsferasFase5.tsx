import React from "react";

interface EsferasFase5Props {
  color1?: string;
  color2?: string;
  sphereRadius?: number;
  gap?: number;
  className?: string;
}

const EsferasFase5: React.FC<EsferasFase5Props> = ({
  color1 = "#05DBED",
  color2 = "#5B4AE0",
  sphereRadius = 32,
  gap = 0,
  className = "",
}) => {
  const grid = [
    [1, 2, 2],
    [2, 1, 2],
    [2, 2, 1],
  ]; // 1=color1, 2=color2
  const size = sphereRadius * 2 * 3 + gap * 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {grid.map((row, i) =>
        row.map((val, j) => (
          <circle
            key={`${i}-${j}`}
            cx={sphereRadius + j * (sphereRadius * 2 + gap)}
            cy={sphereRadius + i * (sphereRadius * 2 + gap)}
            r={sphereRadius}
            fill={val === 1 ? color1 : color2}
            fillOpacity={0.85}
          />
        ))
      )}
    </svg>
  );
};

export default EsferasFase5;
