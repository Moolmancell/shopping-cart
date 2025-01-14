import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.svg';
import { useState } from "react";

export function Header() {
    const [showCart, setShowCart] = useState(false);

    return (
        <header data-testid="header-component">
            <Link to="/">
                <img src={logo} alt="GadJets" data-testid="has-logo"/>
            </Link>
            <nav data-testid="has-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Button title="Cart" onClick={() => setShowCart(!showCart)}>Cart</Button></li>
                </ul>
            </nav>
            {
            showCart && <div>
                <h1 data-testid="cart-shows">Cart</h1>
            </div>
            }
        </header>
    );
}


