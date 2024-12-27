import { SOUND_PATHS, AUDIO_CONFIG, type SoundName } from './types';

class SoundManager {
  private sounds: Map<SoundName, HTMLAudioElement>;

  constructor() {
    this.sounds = new Map(
      Object.entries(SOUND_PATHS).map(([key, path]) => {
        const audio = new Audio(path);
        audio.volume = AUDIO_CONFIG.defaultVolume;
        return [key as SoundName, audio];
      })
    );
  }

  play(soundName: SoundName): void {
    const sound = this.sounds.get(soundName);
    if (!sound) return;

    sound.currentTime = 0;
    sound.play().catch(() => {
      // Ignore autoplay errors
    });
  }
}

export const soundManager = new SoundManager();