export function Header() {
    return (
        <header data-testid="header-component">
            <img src="../../assets/Logo.svg" alt="GadJets" data-testid="has-logo"/>
            <nav data-testid="has-nav">
                <a>Home</a>
                <a>Shop</a>
            </nav>
        </header>
    );
}


