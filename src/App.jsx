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
     
        <div className="text-center mb-8 block md:hidden">
          <div className="text-sm font-medium tracking-wider border-b border-gray-600 pb-1 inline-block">
            VOLUME-BUTTONS MODE
          </div>
        </div>
    

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
