import React from 'react';
import SlotReel from './SlotReel';
import { calculateSpinDelay, calculateSpinDuration } from '../../utils/slotAnimation';

interface DisplayWindowProps {
  reels: number[];
  spinning: boolean;
  onReelComplete: () => void;
}

export const DisplayWindow: React.FC<DisplayWindowProps> = ({ reels, spinning, onReelComplete }) => (
  <div className="relative">
    {/* Display Frame */}
    <div className="bg-black/60 p-8 rounded-2xl mb-8 relative overflow-hidden">
      {/* Metallic Frame */}
      <div className="absolute inset-0 rounded-2xl border-8 border-gradient-metal pointer-events-none" />
      
      {/* Inner Shadow */}
      <div className="absolute inset-0 shadow-inner pointer-events-none" />
      
      {/* Reels Container */}
      <div className="flex gap-6 relative">
        {reels.map((symbolIndex, i) => (
          <SlotReel
            key={i}
            finalSymbolIndex={symbolIndex}
            spinning={spinning}
            onSpinComplete={onReelComplete}
            reelIndex={i}
            spinDelay={calculateSpinDelay(i)}
            spinDuration={calculateSpinDuration(i)}
          />
        ))}
        
        {/* Glass Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.1)_45%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.1)_55%,transparent_60%)] pointer-events-none" />
      </div>
    </div>
  </div>
);