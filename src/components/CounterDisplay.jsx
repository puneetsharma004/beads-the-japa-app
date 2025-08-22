export default function CounterDisplay({ count, isStealthMode }) {
  if (isStealthMode) {
    return (
      <></>
    );
  }

  return (
    <div className="flex items-center justify-center my-4">
      <div className="text-6xl font-extralight transition-all duration-300 ease-out">
        {count}
      </div>
    </div>
  );
}
