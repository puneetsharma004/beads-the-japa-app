import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';

export default function VolumeButtonToggle({ isVolumeButtonMode, onToggle, isStealthMode }) {

  return (
    <div className="text-center mb-8 block md:hidden">
      <button 
        onClick={onToggle}
        className={`text-sm font-medium tracking-wider pb-1 inline-flex items-center gap-2 transition-all duration-300 outline-none ${
          isVolumeButtonMode && isStealthMode 
          ?'text-green-400 hover:text-green-300' 
            :'text-gray-400 hover:text-gray-300'
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
    </div>
  );
}
