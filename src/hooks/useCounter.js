import { useState, useEffect, useCallback } from 'react';
import { useSound } from './useSound';
import { useVibration } from './useVibration';
import { useVolumeButtons } from './useVolumeButtons';

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [todayStats, setTodayStats] = useState({ count: 0, rounds: 0 });
  const [lifetimeStats, setLifetimeStats] = useState({ count: 0, rounds: 0 });
  const [sessionDate, setSessionDate] = useState(new Date().toDateString());
  const [isStealthMode, setIsStealthMode] = useState(false);
  const [isVolumeButtonMode, setIsVolumeButtonMode] = useState(false); // New state
  
  const { playClick, playCompletion } = useSound();
  const { vibrate, vibrateStrong } = useVibration();

  // Load data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('sudhma-data');
    if (savedData) {
      const data = JSON.parse(savedData);
      if (data.sessionDate === new Date().toDateString()) {
        setCount(data.currentCount || 0);
        setTodayStats(data.todayStats || { count: 0, rounds: 0 });
      } else {
        setCount(0);
        setTodayStats({ count: 0, rounds: 0 });
      }
      setLifetimeStats(data.lifetimeStats || { count: 0, rounds: 0 });
      setIsStealthMode(data.isStealthMode || false);
      setIsVolumeButtonMode(data.isVolumeButtonMode || false);
    }
    setSessionDate(new Date().toDateString());
  }, []);

  // Save data to localStorage
  const saveData = useCallback(() => {
    const data = {
      currentCount: count,
      todayStats,
      lifetimeStats,
      sessionDate,
      isStealthMode,
      isVolumeButtonMode
    };
    localStorage.setItem('sudhma-data', JSON.stringify(data));
  }, [count, todayStats, lifetimeStats, sessionDate, isStealthMode, isVolumeButtonMode]);

  useEffect(() => {
    saveData();
  }, [saveData]);

  const increment = useCallback(() => {
  setCount(prevCount => {
    const newCount = prevCount + 1;
    
    if (newCount >= 108) {
      setTodayStats(prevTodayStats => ({
        count: prevTodayStats.count + 108,
        rounds: prevTodayStats.rounds + 1
      }));
      setLifetimeStats(prevLifetimeStats => ({
        count: prevLifetimeStats.count + 108,
        rounds: prevLifetimeStats.rounds + 1
      }));
      
      playCompletion();
      vibrateStrong();
      return 0; // Reset to 0
    } else {
      playClick();
      vibrate();
      return newCount;
    }
  });
}, [playClick, playCompletion, vibrate, vibrateStrong]); // Remove count, todayStats, lifetimeStats

const decrement = useCallback(() => {
  setCount(prevCount => {
    if (prevCount > 0) {
      playClick();
      vibrate();
      return prevCount - 1;
    }
    return prevCount; // Don't change if already 0
  });
}, [playClick, vibrate]); // Remove count dependency


  const reset = useCallback(() => {
    setCount(0);
  }, []);

  const toggleStealth = useCallback(() => {
    setIsStealthMode(prev => !prev);
  }, []);

  const toggleVolumeButtonMode = useCallback(() => {
    setIsVolumeButtonMode(prev => !prev);
  }, []);

  // Volume button integration
  useVolumeButtons(isVolumeButtonMode, increment, decrement);

  return {
    count,
    todayStats,
    lifetimeStats,
    sessionDate,
    isStealthMode,
    isVolumeButtonMode,
    increment,
    decrement,
    reset,
    toggleStealth,
    toggleVolumeButtonMode
  };
};
