export const SOUND_PATHS = {
  spin: '/sounds/spin.mp3',
  win: '/sounds/win.mp3', 
  jackpot: '/sounds/jackpot.mp3',
  click: '/sounds/click.mp3',
  reelStop: '/sounds/reel-stop.mp3',
} as const;

export type SoundName = keyof typeof SOUND_PATHS;

export const AUDIO_CONFIG = {
  defaultVolume: 0.5,
  fadeInDuration: 200,
  fadeOutDuration: 200,
} as const;