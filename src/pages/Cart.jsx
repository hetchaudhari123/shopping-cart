import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = () => {
  const cartItems = useSelector((state) => state.counter.cartItems);
  let price = 0;
  cartItems.forEach(ele => {
    price = price + ele.price;
  });
  return (
    <div className="flex max-w-6xl flex-wrap h-full mx-auto ">
      {
        (cartItems.length == 0) && (<div className="flex flex-col items-center  w-full mt-[15rem] gap-y-5 ">
          <div className=" font-semibold text-xl">Your cart is empty!</div>
          {/* <div className="border-2 border-black"> */}
          <Link to="/">
            <button className="p-3 px-10 font-semibold bg-green-600 text-white  uppercase rounded-lg hover:bg-purple-50 hover:text-green-700 transition duration-300">Shop Now</button>
          </Link>
          {/* </div> */}
        </div>)
      }

      {
        (cartItems.length > 0) && (
          <div className="flex w-screen">
            <div className="flex flex-col items-center justify-center">
              {
                cartItems.map((ele, index) => {
                  return <CartItem key={index} props={ele}></CartItem>
                })
              }
            </div>

            <div className="h-full flex-1  mt-2 flex flex-col justify-between px-[5rem]">
              <div>
                <div className="my-14 py-5">
                  <div className="font-semibold text-xl text-green-800 uppercase">Your Cart</div>
                  <div className="font-semibold text-5xl text-green-700 uppercase">Summary</div>
                  <div className="text-xl font-semibold text-gray-700 mt-4">Total items:{cartItems.length}</div>

                </div>
              </div>
              <div className=" text-xl">
                <div className="font-semibold text-gray-700 ">Total Amount:$<span className="font-bold">{price}</span></div>
                <Link to="/">
            <button className="px-[2rem] py-3 font-semibold bg-green-600 text-white  uppercase rounded-lg hover:bg-purple-50 hover:text-green-700 transition duration-300 ">Check Out Now</button>
          </Link>
              </div>
            </div>
          </div>


        )
      }

    </div>);
};

export default Cart;
