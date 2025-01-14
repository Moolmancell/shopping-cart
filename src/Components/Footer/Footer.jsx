import logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

export function Footer() {
    return <footer data-testid="footer-component">
        <section>
            <img src={logo} alt="" />
            <a href="#">Contact Us</a>
        </section>

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="shop">Shop</Link></li>
                <li><Link to="about">About</Link></li>
                <li><a href="#">Privacy Notice</a></li>
                <li><a href="#">Terms and Conditions</a></li>
            </ul>
        </nav>

        <section>
            <p>© 2025 Richmond Claude S. Bodot</p>
        </section>
    </footer>
}