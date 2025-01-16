import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export function Sidebar({setShowSidebar}) {
    return (
        <div className="fixed top-0 right-0 h-screen w-1/2 bg-white z-50 p-4">
            <Button onClick={() => setShowSidebar()}>x</Button>
            <ul>
                <li><Link to="/" onClick={() => setShowSidebar()}>Home</Link></li>
                <li><Link to="shop" onClick={() => setShowSidebar()}>Shop</Link></li>
                <li><Link to="about" onClick={() => setShowSidebar()}>About</Link></li>
            </ul>
        </div>
    );
}