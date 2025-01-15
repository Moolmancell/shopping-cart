import { createContext } from "react";
import { useState } from "react";
import { Header } from "../Components/Header/Header.jsx";
import { Footer } from "../Components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const addQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };  

  const minusQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, addQuantity, minusQuantity, removeFromCart }}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
