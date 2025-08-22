export default function CounterButtons({ onIncrement, onDecrement, isStealthMode }) {
  if (isStealthMode) {
    return (
      <div className="pb-12 flex justify-center gap-6">
        {/* Smaller decrement button */}
        <button
          onClick={onDecrement}
          className="w-16 h-16 bg-gray-800 rounded-full border border-gray-700 transition-all duration-150 active:scale-95 active:bg-gray-700"
          aria-label="Decrease"
        >
          <div className="w-2 h-2 bg-gray-500 rounded-full mx-auto"></div>
        </button>
        
        {/* Larger increment button */}
        <button
          onClick={onIncrement}
          className="w-24 h-24 bg-gray-800 rounded-full border border-gray-700 transition-all duration-150 active:scale-95 active:bg-gray-700"
          aria-label="Increase"
        >
          <div className="w-3 h-3 bg-gray-500 rounded-full mx-auto"></div>
        </button>
      </div>
    );
  }

  return (
    <div className="pb-16 flex justify-center gap-6 items-end">
      {/* Smaller Decrement Button (Left) */}
      <button
        onClick={onDecrement}
        className="w-28 h-28 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full shadow-xl transition-all duration-150 active:scale-95 active:shadow-md border-2 border-amber-600/20"
        aria-label="Decrease Count"
        style={{
          boxShadow: '0 6px 24px rgba(217, 119, 6, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="w-3 h-3 bg-white/15 rounded-full mx-auto"></div>
      </button>
      
      {/* Larger Increment Button (Right) */}
      <button
        onClick={onIncrement}
        className="w-36 h-36 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full shadow-2xl transition-all duration-150 active:scale-95 active:shadow-lg border-4 border-amber-500/20"
        aria-label="Increase Count"
        style={{
          boxShadow: '0 8px 32px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="w-4 h-4 bg-white/20 rounded-full mx-auto"></div>
      </button>
    </div>
  );
}
