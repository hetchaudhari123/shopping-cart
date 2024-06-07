import { useDispatch } from "react-redux";
import { appendChild,removeChild } from "../redux/Slices/CounterSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
// import toast from "react-hot-toast";
import { toast } from "react-toastify";
import CounterSlice from "../redux/Slices/CounterSlice";
export default function Card({props}){
    const cartItems = useSelector(state=>state.counter.cartItems);
    const dispatch = useDispatch();
    const [hoverOn,setHoverOn] = useState(false);
    let desc = props.description;
    desc = desc.trim();
    // Use regular expression to split the string into words
    const words = desc.split(" ");

    // Select the first 40 words or all if the string has less than 40 words
    const selectedWords = words.slice(0, 10);

    // Join the selected words back into a string
    const resultString = selectedWords.join(' ') + "...";
    // const addTodo = text => {
        // return {
            // type: 'cart/itemAdded',
            // payload: text
        // }
    // }
    function addToCartHandler(){
        dispatch(appendChild(props));
        toast.success("Item Added successfully!");
        // console.log("hey there\n");
    }
    // console.log(cartItems);
    function mouseEnterHandler(){
        // console.log("entered");
        // console.log(hoverOn);
        setHoverOn(true);
    }
    function mouseLeaveHandler(){
        // console.log("left");
        // console.log(hoverOn);
        setHoverOn(false);
    }
    return (
        <div id="cardId" className={`flex flex-col gap-3 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-[2.5rem] py-4 mt-10 ml-5 justify-between items-center  transition  hover:shadow-[0px_0px_95px_53px_#00000024] duration-500 hover:scale-110 `} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <h2 className="w-40 truncate font-semibold mt-1 text-lg text-left ">
            {props.title}
            </h2>
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
                {resultString}
            </p>
          
            <div className="h-[180px] w-[180px] ">
            <img src={props.image} className="h-full w-full object-contain"></img>
            </div>
            <div className="flex justify-between mt-5 items-center w-full">
                <div className="font-semibold text-green-600">${props.price}</div>
                <button onClick={addToCartHandler} id="btnId" className ={`text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:text-white   transition duration-500 ${hoverOn?("bg-black"):("bg-white")} ${hoverOn?("text-white"):("text-black")}`}>Add to Cart</button>
            </div>
        </div>
    )
}