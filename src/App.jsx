import { useCounter } from './hooks/useCounter';
import { useSound } from './hooks/useSound';
import { BsThreeDotsVertical } from 'react-icons/bs';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';
import StealthToggle from './components/StealthToggle';
import VolumeButtonToggle from './components/VolumeButtonToggle';
import { useEffect, useRef, useState } from 'react';

function App() {
  // const [time, setTime] = useState(0); // time in seconds
  // const intervalRef = useRef(null);
  const counter = useCounter();
  const sound = useSound();
  useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.code === "Space") {
      counter.increment()
    } else if (event.code === "ArrowUp") {
      counter.increment()
    } else if (event.code === "ArrowDown") {
      counter.decrement()
    } else if (event.code === "Backspace") {
      counter.decrement()
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown); // cleanup
  };
}, []);

// // Function to start timer
//   const startTimer = () => {
//     if (!intervalRef.current) {
//       intervalRef.current = setInterval(() => {
//         setTime((prev) => prev + 1);
//       }, 1000);
//     }
//   };

//   // Function to pause timer
//   const pauseTimer = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   useEffect(() => {
//     // Start when mounted
//     startTimer();

//     // Listen for visibility changes
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         pauseTimer();
//       } else {
//         startTimer();
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//       pauseTimer();
//     };
//   }, []);

//   // Format seconds to mm:ss
//   const formatTime = (secs) => {
//     const minutes = Math.floor(secs / 60);
//     const seconds = secs % 60;
//     return `${minutes}:${seconds.toString().padStart(2, "0")}`;
//   };


  return (
    <div className="h-screen max-h-screen bg-black text-white flex flex-col ">
      {/* Audio elements */}
      <audio ref={sound.clickAudio} preload="auto">
        <source src="/sounds/click.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={sound.completionAudio} preload="auto">
        <source src="/sounds/completion.mp3" type="audio/mpeg" />
      </audio>

      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-medium">
          {counter.isStealthMode ? "" : "Beads"}
        </h1>
        <div className="flex items-center gap-3">
          <StealthToggle 
            isStealthMode={counter.isStealthMode}
            onToggle={counter.toggleStealth}
          />
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <BsThreeDotsVertical className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Session Info */}
     
        <div className={`text-center text-gray-400 text-sm mb-6 transition-all ${ counter.isStealthMode ? "opacity-0": "opacity-100"}`}>
          Current session date: {new Date(counter.sessionDate).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          })}
        </div>
     

      {/* Volume Button Mode Indicator */}
     
        {/* Volume Button Mode Toggle */}
      <VolumeButtonToggle 
        isVolumeButtonMode={counter.isVolumeButtonMode}
        onToggle={counter.toggleVolumeButtonMode}
        isStealthMode={counter.isStealthMode}
      />
    

      {/* Main Counter Display */}
      <CounterDisplay 
        count={counter.count}
        isStealthMode={counter.isStealthMode}
      />



      {/* Counter Buttons - NOW WITH INCREMENT/DECREMENT */}
      <CounterButtons 
        onIncrement={counter.increment}
        onDecrement={counter.decrement}
        isStealthMode={counter.isStealthMode}
      />
    </div>
  );
}

export default App;
