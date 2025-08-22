import { useCallback, useRef } from 'react';

export const useSound = () => {
  const clickAudio = useRef(null);
  const completionAudio = useRef(null);

  const playClick = useCallback(() => {
    try {
      if (clickAudio.current) {
        clickAudio.current.currentTime = 0;
        clickAudio.current.play();
      }
    } catch (error) {
      console.log('Sound not available');
    }
  }, []);

  const playCompletion = useCallback(() => {
    try {
      if (completionAudio.current) {
        completionAudio.current.currentTime = 0;
        completionAudio.current.play();
      }
    } catch (error) {
      console.log('Sound not available');
    }
  }, []);

  return { 
    playClick, 
    playCompletion,
    clickAudio,
    completionAudio
  };
};
