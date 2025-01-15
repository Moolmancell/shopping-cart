import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export function Sidebar(setShowSidebar) {
    return (
        <div>
            <Link to="/" onClick={() => setShowSidebar()}>Home</Link>
            <Link to="shop" onClick={() => setShowSidebar()}>Shop</Link>
            <Link to="about"> onClick={() => setShowSidebar()}About</Link>
            <Button onClick={() => setShowSidebar()}>x</Button>
        </div>
    );
}