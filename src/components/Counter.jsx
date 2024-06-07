import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/Slices/CounterSlice";

const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div onClick={()=>dispatch(increment())}>
            Increment
            </div>
            <div>
                {count}
            </div>
            <div onClick={()=>dispatch(decrement())}>
                Decrement
            </div>
        </div>
    )
  };
  
  export default Counter;
  