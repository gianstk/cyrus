import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { countersActionTypes } from "../redux/actions/countersActions";

const CounterScreen = () => {
  const counter = useSelector((state) => state.counters.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: countersActionTypes.INCREMENT });
  };

  const handleDecrement = () => {
    dispatch({ type: countersActionTypes.DECREMENT });
  };

  return (    
    <div className="w-auto flex justify-center mt-10">
      <div className="flex flex-row justify-center shadow-lg  items-center w-fit px-5 py-3 bg-orange-50 rounded-xl">
        <div className="text-5xl flex justify-center w-24 my-auto m-5">
          {counter}
        </div>

        <div className="flex flex-col w-auto">
          <button
            className="p-3 mx-auto my-2 w-44 bg-orange-200 flex items-center text-2xl rounded-xl justify-around transition-all hover:bg-orange-300"
            onClick={handleIncrement}
          >
            <p>increment</p>
            <AiOutlinePlusSquare />
          </button>

          <button
            className="p-3 mx-auto my-2 w-44 bg-orange-200 flex items-center text-2xl rounded-xl justify-around transition-all hover:bg-orange-300"
            onClick={handleDecrement}
          >
            <p>decrement</p>
            <AiOutlineMinusSquare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterScreen;