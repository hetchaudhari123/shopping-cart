import { Routes,Route } from "react-router-dom";
import Navbar from "../src/components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
const App = () => {
  return (
    <div className="flex flex-col h-screen ">
      {/* <div className="h-[12%]"> */}
      <div className="">
      <Navbar></Navbar>
      </div>
      <div className="flex-1">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      </div>
    </div>
  )
};

export default App;
