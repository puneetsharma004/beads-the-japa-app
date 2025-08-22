export default function CounterButtons({ onIncrement, onDecrement, isStealthMode }) {
  if (isStealthMode) {
    return (
      <div className="pb-12 flex justify-center flex-col items-center gap-6">
        {/* Smaller decrement button */}
        <button
          onClick={onDecrement}
          className="w-[120px] h-[120px] bg-gray-800 rounded-full border border-gray-700 transition-all duration-150 active:scale-95 active:bg-gray-700"
          aria-label="Decrease"
        >

        </button>
        
        {/* Larger increment button */}
        <button
          onClick={onIncrement}
          className="w-[300px] h-[300px] bg-gray-800 rounded-full border border-gray-700 transition-all duration-150 active:scale-95 active:bg-gray-700"
          aria-label="Increase"
        >
        </button>
      </div>
    );
  }

  return (
    <div className="pb-8 flex justify-center flex-col gap-6 items-center">
      {/* Smaller Decrement Button (top) */}
      <button
        onClick={onDecrement}
        className="w-[120px] h-[120px] bg-gradient-to-br from-amber-700 to-amber-900 rounded-full shadow-xl transition-all duration-150 active:scale-95 active:shadow-md border-2 border-amber-600/20"
        aria-label="Decrease Count"
        style={{
          boxShadow: '0 6px 24px rgba(217, 119, 6, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >

      </button>
      
      {/* Larger Increment Button (bottom) */}
      <button
        onClick={onIncrement}
        className="w-[300px] h-[300px] bg-gradient-to-br from-amber-600 to-amber-800 rounded-full shadow-2xl transition-all duration-150 active:scale-95 active:shadow-lg border-4 border-amber-500/20"
        aria-label="Increase Count"
        style={{
          boxShadow: '0 8px 32px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >

      </button>
    </div>
  );
}
