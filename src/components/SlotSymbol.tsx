import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SlotSymbolProps {
  Icon: LucideIcon;
  color: string;
  spinning: boolean;
}

const SlotSymbol: React.FC<SlotSymbolProps> = ({ Icon, color, spinning }) => (
  <div
    className={`w-32 h-32 bg-white/5 backdrop-blur-lg rounded-2xl flex items-center justify-center transition-all border-2 border-pink-500/20 ${
      spinning ? 'animate-[bounce_0.5s_infinite]' : 'hover:scale-105'
    }`}
  >
    <Icon
      size={64}
      className={`${color} transition-all ${
        spinning ? 'animate-[spin_0.5s_infinite]' : ''
      }`}
    />
  </div>
);

export default SlotSymbol;