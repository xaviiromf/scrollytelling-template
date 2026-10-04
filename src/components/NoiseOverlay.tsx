import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] bg-grain mix-blend-screen"
    />
  );
};
