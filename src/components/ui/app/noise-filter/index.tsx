import React from "react";

const NoiseFilter: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-30">
      <svg className="size-full">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
};

export default NoiseFilter;
