import { useCounter } from './hooks/useCounter';
import { useSound } from './hooks/useSound';
import { BsThreeDotsVertical } from 'react-icons/bs';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';
import StealthToggle from './components/StealthToggle';

function App() {
  const counter = useCounter();
  const sound = useSound();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
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
          {counter.isStealthMode ? "Timer" : "Sudhma"}
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
      {!counter.isStealthMode && (
        <div className="text-center text-gray-400 text-sm mb-6">
          Current session date: {new Date(counter.sessionDate).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          })}
        </div>
      )}

      {/* Volume Button Mode Indicator */}
      {!counter.isStealthMode && (
        <div className="text-center mb-8">
          <div className="text-sm font-medium tracking-wider border-b border-gray-600 pb-1 inline-block">
            VOLUME-BUTTONS MODE
          </div>
        </div>
      )}

      {/* Main Counter Display */}
      <CounterDisplay 
        count={counter.count}
        isStealthMode={counter.isStealthMode}
      />

      {/* Statistics */}
      {!counter.isStealthMode && (
        <div className="text-center space-y-2 mb-12">
          <div>
            <span className="text-gray-400">Today </span>
            <span className="text-white font-medium">{counter.todayStats.count}</span>
          </div>
          <div className="text-gray-500 text-sm">
            {counter.todayStats.count} × {counter.todayStats.rounds}
          </div>
          
          <div className="mt-4">
            <span className="text-gray-400">Lifetime </span>
            <span className="text-white font-medium">{counter.lifetimeStats.count.toLocaleString()}</span>
          </div>
          <div className="text-gray-500 text-sm">
            108 × {counter.lifetimeStats.rounds}
          </div>
        </div>
      )}

      {/* Counter Buttons - NOW WITH INCREMENT/DECREMENT */}
      <CounterButtons 
        onIncrement={counter.increment}
        onDecrement={counter.decrement}
        isStealthMode={counter.isStealthMode}
      />

      {/* Reset Button */}
      {!counter.isStealthMode && counter.count > 0 && (
        <div className="text-center pb-4">
          <button 
            onClick={counter.reset}
            className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
          >
            Reset Current Count
          </button>
        </div>
      )}

      {/* Stealth Mode Indicator */}
      {counter.isStealthMode && (
        <div className="flex-1 flex items-center justify-center pb-20">
          <div className="text-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2 animate-pulse"></div>
            <div className="text-sm text-gray-500">Active Session</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
