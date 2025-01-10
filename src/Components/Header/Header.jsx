import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.svg';

export function Header() {
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
                    <li><Button title="Cart">Cart</Button></li>
                </ul>
            </nav>
        </header>
    );
}


