import { useCallback } from 'react';

export const useVibration = () => {
  const vibrate = useCallback(() => {
    if ('vibrate' in navigator) {
      navigator.vibrate(50); // Short vibration
    }
  }, []);

  const vibrateStrong = useCallback(() => {
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]); // Pattern for completion
    }
  }, []);

  return { vibrate, vibrateStrong };
};
