import { useState, useCallback } from 'react';

export const useSlotMachine = () => {
  const [reels, setReels] = useState<number[]>([0, 0, 0]);
  const [spinning, setSpinning] = useState(false);
  const [coins, setCoins] = useState(100);
  const [message, setMessage] = useState('');
  const [jackpot, setJackpot] = useState(1000);
  const [completedReels, setCompletedReels] = useState(0);
  const PLAY_COST = 10;

  const checkWin = useCallback((newReels: number[]) => {
    if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
      // All symbols match
      if (newReels[0] === 0) { // Circle symbol (index 0) is jackpot
        setCoins(prev => prev + jackpot);
        setMessage('🎉 JACKPOT! You won ₩1,000,000,000! 🎉');
      } else {
        setCoins(prev => prev + 50);
        setMessage('Winner! You won ₩50,000,000! 🎯');
      }
    }
  }, [jackpot]);

  const spin = useCallback(() => {
    if (spinning || coins < PLAY_COST) return;
    
    setCoins(prev => prev - PLAY_COST);
    setMessage('');
    setSpinning(true);
    setCompletedReels(0);

    const newReels = reels.map(() => Math.floor(Math.random() * 6));
    setReels(newReels);
  }, [spinning, coins, PLAY_COST, reels]);

  const handleReelComplete = useCallback(() => {
    setCompletedReels(prev => {
      const newCount = prev + 1;
      if (newCount === 3) {
        setSpinning(false);
        checkWin(reels);
      }
      return newCount;
    });
  }, [reels, checkWin]);

  return {
    reels,
    spinning,
    coins,
    message,
    jackpot,
    PLAY_COST,
    spin,
    handleReelComplete
  };
};