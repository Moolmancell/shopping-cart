import { Button } from "../Button/Button";

export function Header() {
    return (
        <header data-testid="header-component">
            <img src="../../assets/Logo.svg" alt="GadJets" data-testid="has-logo"/>
            <nav data-testid="has-nav">
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <Button title="Cart">
                    Cart
                </Button>
            </nav>
        </header>
    );
}


