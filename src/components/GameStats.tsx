import React from 'react';
import { Coins, Trophy } from 'lucide-react';

interface GameStatsProps {
  coins: number;
  message: string;
}

const GameStats: React.FC<GameStatsProps> = ({ coins, message }) => (
  <div className="text-center space-y-6">
    <div className="flex items-center justify-center gap-3 text-3xl font-bold text-white">
      <Coins className="text-yellow-400" />
      <span>₩{(coins * 1000000).toLocaleString()}</span>
    </div>
    
    {message && (
      <div className="relative">
        <div className="absolute inset-0 bg-pink-500/20 blur-xl -z-10" />
        <p className="text-2xl text-white font-bold animate-bounce px-6 py-3 rounded-lg">
          {message}
        </p>
      </div>
    )}

    <div className="mt-8 text-pink-300 text-center space-y-2">
      <div className="flex items-center justify-center gap-2">
        <Trophy className="text-yellow-400" />
        <p>Match 3 circles for the grand prize! 🎯</p>
      </div>
      <p className="text-sm opacity-75">Match any other 3 symbols to win ₩50,000,000! 💰</p>
    </div>
  </div>
);

export default GameStats;