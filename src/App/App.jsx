import { useState } from 'react'
import {Header} from '../Components/Header/Header.jsx'
import { Footer } from '../Components/Footer/Footer.jsx'
import { Outlet } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  return <div>
    <Header/>
    <Outlet/>
    <Footer/>
  </div>
}

export default App
