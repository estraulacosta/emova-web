import React from "react";

interface EsferaProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const Esfera: React.FC<EsferaProps> = ({ size = 80, color = "#05DBED", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 291 291"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="145.5" cy="145.5" r="145.5" fill={color} />
  </svg>
);

export default Esfera;
