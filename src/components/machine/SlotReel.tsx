import React, { useState, useEffect, useRef } from 'react';
import { symbols } from '../../utils/symbols';

interface SlotReelProps {
  finalSymbolIndex: number;
  spinning: boolean;
  onSpinComplete: () => void;
  reelIndex: number;
  spinDelay: number;
  spinDuration: number;
}

const SlotReel: React.FC<SlotReelProps> = ({
  finalSymbolIndex,
  spinning,
  onSpinComplete,
  reelIndex,
  spinDelay,
  spinDuration,
}) => {
  const [currentSymbolIndex, setCurrentSymbolIndex] = useState(0);
  const spinIntervalRef = useRef<number>();
  const spinStartTimeRef = useRef<number>();

  useEffect(() => {
    if (spinning) {
      spinStartTimeRef.current = Date.now() + spinDelay;
      spinIntervalRef.current = window.setInterval(() => {
        setCurrentSymbolIndex(Math.floor(Math.random() * symbols.length));
        
        if (Date.now() - spinStartTimeRef.current! >= spinDuration) {
          window.clearInterval(spinIntervalRef.current);
          setCurrentSymbolIndex(finalSymbolIndex);
          onSpinComplete();
        }
      }, 50);
    }

    return () => {
      if (spinIntervalRef.current) {
        window.clearInterval(spinIntervalRef.current);
      }
    };
  }, [spinning, finalSymbolIndex, onSpinComplete, spinDelay, spinDuration]);

  const Icon = symbols[currentSymbolIndex].icon;
  const color = symbols[currentSymbolIndex].color;

  return (
    <div className="relative w-32 h-32">
      {/* Reel Frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-700 rounded-xl border border-zinc-600" />
      
      {/* Reel Window */}
      <div className="absolute inset-[2px] bg-black rounded-lg overflow-hidden">
        {/* Symbol Container */}
        <div
          className={`relative flex items-center justify-center h-full transition-transform ${
            spinning ? 'animate-slot-spin' : ''
          }`}
        >
          <Icon
            size={64}
            className={`${color} transition-all transform ${
              spinning ? 'scale-90' : 'scale-100'
            }`}
          />
        </div>

        {/* Mechanical Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_49%,rgba(255,255,255,0.1)_50%,transparent_51%)] bg-[length:100%_8px]" />
        
        {/* Reel Side Shadows */}
        <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-r from-white/10 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-l from-white/10 to-transparent" />
        
        {/* Glass Reflections */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      {/* Reel Notches */}
      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-8 bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-l" />
      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-8 bg-gradient-to-l from-zinc-600 to-zinc-700 rounded-r" />
    </div>
  );
};

export default SlotReel;