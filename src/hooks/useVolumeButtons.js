import { useEffect, useCallback } from 'react';

export const useVolumeButtons = (isEnabled, onVolumeUp, onVolumeDown) => {
  const handleKeyDown = useCallback((event) => {
    if (!isEnabled) return;
    
    // Prevent default volume behavior when our mode is active
    if (event.code === 'VolumeUp' || event.code === 'VolumeDown') {
      event.preventDefault();
      event.stopPropagation();
      
      if (event.code === 'VolumeUp') {
        onVolumeUp();
      } else if (event.code === 'VolumeDown') {
        onVolumeDown();
      }
    }
  }, [isEnabled, onVolumeUp, onVolumeDown]);

  useEffect(() => {
    if (isEnabled) {
      // Add event listener when volume button mode is active
      document.addEventListener('keydown', handleKeyDown, { capture: true });
      
      // Also try to prevent default volume behavior
      const preventVolumeDefault = (e) => {
        if (e.code === 'VolumeUp' || e.code === 'VolumeDown') {
          e.preventDefault();
        }
      };
      
      document.addEventListener('keyup', preventVolumeDefault, { capture: true });
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown, { capture: true });
        document.removeEventListener('keyup', preventVolumeDefault, { capture: true });
      };
    }
  }, [isEnabled, handleKeyDown]);
};
