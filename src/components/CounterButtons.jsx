export default function CounterButtons({ onIncrement, onDecrement, isStealthMode }) {
  return (
    <div className="pb-8 flex justify-center flex-col gap-6 items-center">
      {/* Smaller Decrement Button (top) */}
      <button
        onClick={onDecrement}
        className={`w-[120px] h-[120px] rounded-full transition-all duration-150 active:scale-95 active:shadow-md border-2 outline-none ${isStealthMode? "bg-gray-800 border-gray-700 active:bg-gray-700": "bg-gradient-to-br from-amber-700 to-amber-900 border-amber-600/20 shadow-btn-xl" }`}
        aria-label="Decrease Count"
      >

      </button>
      
      {/* Larger Increment Button (bottom) */}
      <button
        onClick={onIncrement}
        className={`w-[300px] h-[300px] bg-gradient-to-br rounded-full transition-all duration-150 active:scale-95 active:shadow-lg border-4 outline-none ${isStealthMode? "bg-gray-800 border-gray-700 active:bg-gray-700" : "from-amber-600 to-amber-800 border-amber-500/20 shadow-btn-2xl"}`}
        aria-label="Increase Count"
      >
      </button>
    </div>
  );
}
