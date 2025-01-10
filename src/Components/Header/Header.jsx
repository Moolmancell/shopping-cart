import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header data-testid="header-component">
            <img src="../../assets/Logo.svg" alt="GadJets" data-testid="has-logo"/>
            <nav data-testid="has-nav">
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>
                <Link to="about">About</Link>
                <Button title="Cart">
                    Cart
                </Button>
            </nav>
        </header>
    );
}


