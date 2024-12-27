import React from 'react';
import { CabinetFrame } from './machine/CabinetFrame';
import { DisplayWindow } from './machine/DisplayWindow';
import GameControls from './GameControls';
import GameStats from './GameStats';
import Header from './Header';
import { useSlotMachine } from '../hooks/useSlotMachine';

const SlotMachine = () => {
  const {
    reels,
    spinning,
    coins,
    message,
    jackpot,
    PLAY_COST,
    spin,
    handleReelComplete
  } = useSlotMachine();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a] p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,51,102,0.1),transparent_70%)]" />
      
      <Header jackpot={jackpot} />

      <CabinetFrame>
        <DisplayWindow
          reels={reels}
          spinning={spinning}
          onReelComplete={handleReelComplete}
        />

        {/* Controls Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 opacity-50" />
          <GameControls onSpin={spin} spinning={spinning} cost={PLAY_COST} />
        </div>
      </CabinetFrame>

      <GameStats coins={coins} message={message} />
    </div>
  );
};

export default SlotMachine;