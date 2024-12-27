import React from 'react';
import { Play, Loader } from 'lucide-react';

interface GameControlsProps {
  onSpin: () => void;
  spinning: boolean;
  cost: number;
}

const GameControls: React.FC<GameControlsProps> = ({ onSpin, spinning, cost }) => (
  <div className="text-center relative">
    <button
      onClick={onSpin}
      disabled={spinning}
      className={`
        metallic-button
        px-12 py-6 rounded-2xl text-white font-bold text-xl
        transition-all transform relative
        ${spinning ? 'opacity-75 cursor-not-allowed scale-95' : 'hover:scale-105 hover:rotate-1'}
        group
      `}
    >
      {/* Button Glow Effect */}
      <div className="absolute inset-0 bg-pink-500/20 blur-xl group-hover:blur-2xl transition-all" />
      
      {/* Button Content */}
      <div className="relative flex items-center gap-3">
        {spinning ? (
          <>
            <Loader className="animate-spin" />
            <span>Playing...</span>
          </>
        ) : (
          <>
            <Play className="animate-bounce" />
            <span>Play (₩{(cost * 1000000).toLocaleString()})</span>
          </>
        )}
      </div>
      
      {/* Metallic Edge */}
      <div className="absolute inset-0 rounded-2xl border border-white/10" />
    </button>
  </div>
);

export default GameControls;