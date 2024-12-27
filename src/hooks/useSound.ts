import { useCallback } from 'react';

const sounds = {
  spin: new Audio('/sounds/spin.mp3'),
  win: new Audio('/sounds/win.mp3'),
  jackpot: new Audio('/sounds/jackpot.mp3'),
  click: new Audio('/sounds/click.mp3'),
  reelStop: new Audio('/sounds/reel-stop.mp3')
};

// Set volume for all sounds
Object.values(sounds).forEach(sound => {
  sound.volume = 0.5;
});

export const useSound = () => {
  const playSound = useCallback((soundName: keyof typeof sounds) => {
    const sound = sounds[soundName];
    sound.currentTime = 0;
    sound.play().catch(() => {
      // Ignore autoplay errors
    });
  }, []);

  return { playSound };
};