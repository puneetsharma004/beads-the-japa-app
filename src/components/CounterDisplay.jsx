export default function CounterDisplay({ count, isStealthMode }) {
  if (isStealthMode) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-8xl font-light text-gray-600">
          ●
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-9xl font-extralight transition-all duration-300 ease-out">
        {count}
      </div>
    </div>
  );
}
