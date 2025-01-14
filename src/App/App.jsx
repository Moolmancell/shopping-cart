import { createContext } from "react";
import { useState } from "react";
import { Header } from "../Components/Header/Header.jsx";
import { Footer } from "../Components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
