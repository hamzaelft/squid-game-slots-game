import { BASE_SOUNDS, SOUND_CONFIG } from './constants';

class SoundManager {
  private sounds: Map<string, HTMLAudioElement> = new Map();
  private initialized: boolean = false;

  async init() {
    if (this.initialized) return;

    try {
      // First check if files exist
      const checkPromises = Object.values(BASE_SOUNDS).map(async (path) => {
        const response = await fetch(path);
        if (!response.ok) {
          throw new Error(`Sound file not found: ${path}`);
        }
      });

      await Promise.all(checkPromises);

      // Then load the audio
      const loadPromises = Object.entries(BASE_SOUNDS).map(async ([key, path]) => {
        const audio = new Audio(path);
        audio.volume = SOUND_CONFIG.defaultVolume;
        
        const loadPromise = new Promise((resolve, reject) => {
          audio.addEventListener('canplaythrough', resolve, { once: true });
          audio.addEventListener('error', (e) => reject(new Error(`Failed to load audio: ${e.message}`)), { once: true });
        });

        audio.load();
        
        await loadPromise;
        this.sounds.set(key, audio);
      });

      await Promise.all(loadPromises);
      this.initialized = true;
      console.log('Sound system initialized successfully');
    } catch (error) {
      console.error('Failed to initialize sound system:', error);
      throw error; // Re-throw to handle in the component
    }
  }

  play(soundName: keyof typeof BASE_SOUNDS) {
    const sound = this.sounds.get(soundName);
    if (!sound) {
      console.warn(`Sound not found: ${soundName}`);
      return;
    }

    try {
      const audioClone = sound.cloneNode() as HTMLAudioElement;
      audioClone.volume = SOUND_CONFIG.defaultVolume;
      
      audioClone.play().catch(error => {
        if (error.name === 'NotAllowedError') {
          console.warn('Sound playback was blocked by browser autoplay policy');
        } else {
          console.error(`Failed to play sound ${soundName}:`, error);
        }
      });
    } catch (error) {
      console.error(`Error creating sound clone for ${soundName}:`, error);
    }
  }
}

export const soundManager = new SoundManager();