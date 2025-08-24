import { RiEyeOffLine, RiEyeLine } from 'react-icons/ri';

export default function StealthToggle({ isStealthMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-sm hover:bg-gray-700/50 transition-all outline-none"
      title={isStealthMode ? 'Switch to Normal Mode' : 'Switch to Stealth Mode'}
    >
      {isStealthMode ? (
        <RiEyeOffLine className="w-4 h-4 text-green-400" />
      ) : (
        <RiEyeLine className="w-4 h-4 text-gray-400" />
      )}
      <div className={`w-2 h-2 rounded-full ${isStealthMode ? 'bg-green-500' : 'bg-gray-500'}`}></div>
      <span className="text-xs">{isStealthMode ? 'Stealth' : 'Normal'}</span>
    </button>
  );
}
