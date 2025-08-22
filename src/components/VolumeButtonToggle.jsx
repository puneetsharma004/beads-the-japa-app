import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';

export default function VolumeButtonToggle({ isVolumeButtonMode, onToggle, isStealthMode }) {
  if (isStealthMode) return null;

  return (
    <div className="text-center mb-8">
      <button 
        onClick={onToggle}
        className={`text-sm font-medium tracking-wider pb-1 inline-flex items-center gap-2 transition-all duration-300 ${
          isVolumeButtonMode 
            ? 'border-b border-green-500 text-green-400 hover:text-green-300' 
            : 'border-b border-gray-600 text-gray-400 hover:text-gray-300'
        }`}
      >
        {isVolumeButtonMode ? (
          <>
            <MdVolumeUp className="w-4 h-4" />
            VOLUME-BUTTONS ACTIVE
          </>
        ) : (
          <>
            <MdVolumeOff className="w-4 h-4" />
            VOLUME-BUTTONS MODE
          </>
        )}
      </button>
      
      {isVolumeButtonMode && (
        <div className="text-xs text-green-600 mt-2 animate-pulse">
          Volume Up: Count • Volume Down: Decrease
        </div>
      )}
    </div>
  );
}
