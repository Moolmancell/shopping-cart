import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header data-testid="header-component">
            <img src="../../assets/Logo.svg" alt="GadJets" data-testid="has-logo"/>
            <nav data-testid="has-nav">
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
                <Button title="Cart">
                    Cart
                </Button>
            </nav>
        </header>
    );
}


