import { FcDeleteDatabase } from "react-icons/fc"
import { MdDelete } from "react-icons/md";
import wordGen from "../functions/wordGen";
import { useDispatch,useSelector } from "react-redux";
import { appendChild,removeChild } from "../redux/Slices/CounterSlice";

const CartItem = (props) => {
  const prop = props.props;
  const cartItems = useSelector((state)=>state.counter.cartItems);
  const dispatch = useDispatch();
  // console.log(props);
  // console.log(prop.title);
  const resultedString = wordGen(prop.description);
  function removeItemHandler(){
    console.log(prop.id);
    dispatch(removeChild(prop.id));
  }
  // let resultedString = "";
  //
  // let desc = prop.description;
  //   desc = desc.trim();
  //   // Use regular expression to split the string into words
  //   const words = desc.split(" ");

  //   // Select the first 40 words or all if the string has less than 40 words
  //   const selectedWords = words.slice(0, 10);

  //   // Join the selected words back into a string
  //   const resultedString = selectedWords.join(' ') + "...";
  //
  return (<div className="flex p-[2.5rem] border-b-2 border-black mt-2 mb-2  ">
    {/* <div className=""> */}
    <div className="w-[30%]   flex justify-center items-center">
      <img src={prop.image} alt={`${prop.title} image`} className="h-[15rem] object-contain " />
    </div>
    {/* </div> */}
    <div className="flex flex-col flex-1 ml-[8rem] gap-y-4">
      {/* <div className="flex-1"> */}
      <div className="text-xl text-slate-700 font-semibold">{prop.title}</div>
      <div className="text-base text-slate-700 font-medium">{resultedString}</div>
      <div className="flex  justify-between">
        <div className=" font-bold text-green-600 text-lg">${prop.price}</div>
        <button className="bg-red-200 p-3 rounded-full text-red-900 hover:bg-red-400 hover:text-white " onClick={removeItemHandler}><MdDelete />
        </button>
      </div>
    </div>
  </div>);
};

export default CartItem;
