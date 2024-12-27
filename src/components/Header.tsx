import React from 'react';
import { Target } from 'lucide-react';

interface HeaderProps {
  jackpot: number;
}

export const Header: React.FC<HeaderProps> = ({ jackpot }) => (
  <div className="text-center mb-8 relative">
    <div className="absolute inset-0 bg-pink-500/20 blur-3xl -z-10" />
    <h1 className="text-6xl font-bold text-white mb-4 tracking-wider flex items-center justify-center gap-4">
      <Target className="text-pink-500 animate-pulse" size={48} />
      SQUID SLOTS
      <Target className="text-pink-500 animate-pulse" size={48} />
    </h1>
    <p className="text-2xl text-pink-300 font-bold">
      Prize Pool: ₩{(jackpot * 1000000).toLocaleString()}
    </p>
  </div>
);

export default Header;