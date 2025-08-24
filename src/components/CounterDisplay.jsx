import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
export default function CounterDisplay({ count, isStealthMode }) {
  let [roundsChanted, setRoundsChanted] = useState(0)
 
    useEffect(()=>{
    if (count >= 107) {
    setRoundsChanted(prev => prev + 1);
  }
  }, [count])

  return (
    <div className={`flex flex-col items-center justify-center my-4 gap-4 transition-all font-roboto ${isStealthMode ? "opacity-0": "opacity-100"}`}>
      <h3>
        <span className="text-gray-400 flex items-center gap-1 font-bold">108 <RxCross2/> {roundsChanted} </span>
      </h3>
      <div className="text-slate-50 text-7xl transition-all duration-300 ease-out ">
        {count}
      </div>
    </div>
  );
}
