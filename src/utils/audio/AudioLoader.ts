export class AudioLoader {
  static createAudio(path: string, volume: number): Promise<HTMLAudioElement> {
    return new Promise((resolve, reject) => {
      const audio = new Audio(path);
      audio.volume = volume;
      
      const handleLoad = () => {
        audio.removeEventListener('canplaythrough', handleLoad);
        audio.removeEventListener('error', handleError);
        resolve(audio);
      };
      
      const handleError = () => {
        audio.removeEventListener('canplaythrough', handleLoad);
        audio.removeEventListener('error', handleError);
        reject(new Error(`Failed to load audio: ${path}`));
      };
      
      audio.addEventListener('canplaythrough', handleLoad);
      audio.addEventListener('error', handleError);
      
      // Trigger load
      audio.load();
    });
  }
}