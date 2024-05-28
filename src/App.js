import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Food from "./pages/Food";
import Menu from "./pages/Menu";
import FoodCart from "./pages/FoodCart";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/food" element={<Food />} />
        <Route path='/foodITem' element={<FoodCart />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </>
  );
}


export default App;
