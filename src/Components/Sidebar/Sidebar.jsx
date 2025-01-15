import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export function Sidebar({setShowSidebar}) {
    return (
        <div>
            <Button onClick={() => setShowSidebar()}>x</Button>
            <ul>
                <li><Link to="/" onClick={() => setShowSidebar()}>Home</Link></li>
                <li><Link to="shop" onClick={() => setShowSidebar()}>Shop</Link></li>
                <li><Link to="about" onClick={() => setShowSidebar()}>About</Link></li>
            </ul>
        </div>
    );
}