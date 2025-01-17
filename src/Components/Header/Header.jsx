import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.svg';
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { Sidebar } from "../Sidebar/Sidebar";
import ShoppingCart from '../../assets/Shopping Cart Logo/ShoppingCart.svg';
import SidebarIcon from '../../assets/Sidebar/Sidebar.svg';

export function Header() {
    const [showCart, setShowCart] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <header data-testid="header-component" className="flex justify-between items-center p-4 bg-white">
            <Link to="/">
                <img src={logo} alt="GadJets" data-testid="has-logo" className="w-20"/>
            </Link>
            <nav data-testid="has-nav" className="hidden md:block">
                <ul className="flex gap-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><Link to="about">About</Link></li>
                </ul>
            </nav>
            <div className="flex gap-8 ">
            {showCart ? (
                <Cart setShowCart={setShowCart} />
            ) : (
                <Button title="Cart" onClick={() => setShowCart(!showCart)}><img src={ShoppingCart} alt="Shopping cart" /></Button>
            )}

            {showSidebar ? (
                <Sidebar setShowSidebar={setShowSidebar} />
            ) : (
                <Button onClick={() => setShowSidebar(!showSidebar)}><img src={SidebarIcon} alt="show tab" /></Button>
            )}
            </div>
        </header>
    );
}


