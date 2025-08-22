import { useState, useEffect, useCallback } from 'react';
import { useSound } from './useSound';
import { useVibration } from './useVibration';

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [todayStats, setTodayStats] = useState({ count: 0, rounds: 0 });
  const [lifetimeStats, setLifetimeStats] = useState({ count: 0, rounds: 0 });
  const [sessionDate, setSessionDate] = useState(new Date().toDateString());
  const [isStealthMode, setIsStealthMode] = useState(false);
  
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
        // New day, reset daily stats
        setCount(0);
        setTodayStats({ count: 0, rounds: 0 });
      }
      setLifetimeStats(data.lifetimeStats || { count: 0, rounds: 0 });
      setIsStealthMode(data.isStealthMode || false);
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
      isStealthMode
    };
    localStorage.setItem('sudhma-data', JSON.stringify(data));
  }, [count, todayStats, lifetimeStats, sessionDate, isStealthMode]);

  useEffect(() => {
    saveData();
  }, [saveData]);

  const increment = useCallback(() => {
    const newCount = count + 1;
    
    if (newCount >= 108) {
      // Mala completed
      setCount(0);
      const newTodayStats = {
        count: todayStats.count + 108,
        rounds: todayStats.rounds + 1
      };
      const newLifetimeStats = {
        count: lifetimeStats.count + 108,
        rounds: lifetimeStats.rounds + 1
      };
      setTodayStats(newTodayStats);
      setLifetimeStats(newLifetimeStats);
      
      playCompletion();
      vibrateStrong();
    } else {
      setCount(newCount);
      playClick();
      vibrate();
    }
  }, [count, todayStats, lifetimeStats, playClick, playCompletion, vibrate, vibrateStrong]);

  // NEW: Decrement function
  const decrement = useCallback(() => {
    if (count > 0) {
      setCount(count - 1);
      playClick();
      vibrate();
    }
  }, [count, playClick, vibrate]);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  const toggleStealth = useCallback(() => {
    setIsStealthMode(prev => !prev);
  }, []);

  return {
    count,
    todayStats,
    lifetimeStats,
    sessionDate,
    isStealthMode,
    increment,
    decrement, // NEW
    reset,
    toggleStealth
  };
};
