import { Link } from "react-router-dom"
import { Button } from "../../Components/Button/Button"
import logo from '../../assets/Logo.svg';
import FreeShipping from '../../assets/Features/Free Shipping.svg'
import FlexiblePayment from '../../assets/Features/Flexible Payment.svg'
import EarnPoints from '../../assets/Features/Earn Points.svg'



export function Home() {
    return <main>
        <section>
            <div>
                <h1>Your Go-To Hub for Smart Tech Solutions!</h1>
                <p>Innovative Gadgets, Unmatched Convenience, Always Within Reach</p>
                <Link to="shop">Check Shop</Link>
            </div>
            <img src="" alt=""/>
        </section>

        <section>
            <h2>The latest. Take a look at what’s new, right now.</h2>
            <div className="product-cards">
                <div className="product-card">
                    <img className="" src="" alt=""/>
                    <h3 className="">iPad Mini</h3>
                    <p className="">Thinstant Classic</p>
                    <p className="">Starting at $100</p>
                </div>
                <div className="product-card">
                    <img className="" src="" alt=""/>
                    <h3 className="">Ultra Open Earbuds</h3>
                    <p className="">Color Chilled Lilac</p>
                    <p className="">Starting at $100</p>
                </div>
                <div className="product-card">
                    <img className="" src="" alt=""/>
                    <h3 className="">FE 28–70 mm F2 GM</h3>
                    <p className="">Thinstant Classic</p>
                    <p className="">Starting at $100</p>
                </div>
            </div>
        </section>

        <section>
            <h2>Our partners</h2>
            <div className="partner-cards">
                <div className="partner-card"></div>
                <div className="partner-card"></div>
                <div className="partner-card"></div>
            </div>
        </section>

        <section>
            <div className="features">
                <div className="features-child">
                    <img src={FreeShipping} alt="" />
                    <p>Free shipping for products 200$ and above</p>
                </div>
                <div className="features-child">
                    <img src={FlexiblePayment} alt="" />
                    <p>Enjoy no-hassle payments</p>
                </div>
                <div className="features-child">
                    <img src={EarnPoints} alt="" />
                    <p>Earn points to enjoy bonuses, on your future purchase</p>
                </div>
            </div>
        </section>

        <section>
            <img src={logo} alt="" />
            <h3>Learn More About Us</h3>
            <Link to="about">Check About Us</Link>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
        </section>

        <section>
            <h1>Contact Us</h1>
            <p>We are ready to answer your questions</p>
            <form>
                <input type="text" name="" id="" placeholder="Name"/>
                <input type="text" name="" id="" placeholder="Email"/>
                <input type="submit" value="Contact Us" />
            </form>
        </section>
    </main>
}