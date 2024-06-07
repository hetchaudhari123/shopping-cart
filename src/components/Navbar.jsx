import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigation = useNavigate();
  function addToCartHandler(){
    navigation("/cart");
  }
  return (
    <div className="w-full h-20 bg-[#0F172A] ">
    {/* // <div className="w-full h-full bg-[#0F172A] "> */}
    {/* // <div className="w-full h-[20%] bg-[#0F172A] "> */}
      <div className="h-full w-[72rem]  mx-auto flex items-center  justify-between w-6xl">
      <div className="cursor-pointer" onClick={()=>{navigation("/")}}><img src="/logo.png" className="h-14 "></img></div>
      <div className=" flex items-center gap-x-4 ">
      <button className=" text-white" onClick={()=>{navigation("/")}}>Home</button>
      <button className=" text-white text-2xl" onClick={addToCartHandler}><FaShoppingCart /></button>
      </div>
      </div>
      
    </div>
  )
};

export default Navbar;
