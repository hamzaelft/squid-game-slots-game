import React from 'react';

export const CabinetFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative">
    <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 p-16 rounded-3xl shadow-2xl border-8 border-zinc-700 relative">
      {/* Metal Texture Overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[radial-gradient(circle_at_center,white,transparent_70%)]" />
      
      {/* Decorative Screws */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-4 h-4 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 shadow-inner
            ${i < 2 ? 'top-4' : i < 4 ? 'top-1/3' : i < 6 ? 'top-2/3' : 'bottom-4'}
            ${i % 2 === 0 ? 'left-4' : 'right-4'}`}
        />
      ))}
      
      {children}
    </div>

    {/* Machine Stand with 3D Effect */}
    <div className="h-8 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-b-lg mx-12 shadow-lg relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
    </div>
    <div className="h-4 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-b-lg mx-20" />
  </div>
);