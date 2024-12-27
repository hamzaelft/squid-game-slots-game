import { symbols } from './symbols';

interface SpinConfig {
  duration: number;
  reelStops: number;
}

export const generateSpinSequence = (finalIndex: number, config: SpinConfig): number[] => {
  const sequence: number[] = [];
  const stopsPerSymbol = Math.floor(config.reelStops / symbols.length);
  
  for (let i = 0; i < config.reelStops; i++) {
    sequence.push(Math.floor(Math.random() * symbols.length));
  }
  
  // Ensure the final symbol is our target
  sequence[sequence.length - 1] = finalIndex;
  return sequence;
};

export const calculateSpinDelay = (reelIndex: number): number => {
  // Each subsequent reel spins longer
  return reelIndex * 0.2;
};

export const calculateSpinDuration = (reelIndex: number): number => {
  // Each subsequent reel spins longer
  const baseDuration = 2000;
  return baseDuration + (reelIndex * 500);
};