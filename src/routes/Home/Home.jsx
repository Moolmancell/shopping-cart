import { Link } from "react-router-dom"
import { Button } from "../../Components/Button/Button"
import logo from '../../assets/Logo.svg';
import FreeShipping from '../../assets/Features/Free Shipping.svg'
import FlexiblePayment from '../../assets/Features/Flexible Payment.svg'
import EarnPoints from '../../assets/Features/Earn Points.svg'
import ButtonArrow  from '../../assets/ButtonArrow/ButtonArrow.svg'

import Headphones from '../../assets/Headphones/Headphones.png'

import Ipad from '../../assets/Product/Ipad.png';
import UltraOpenEarbuds from '../../assets/Product/Ultra Open Earbuds.png';
import FE2870mmF2GM from '../../assets/Product/Fe-28.png';

import Bose from '../../assets/Partners/Bose.png';
import Apple from '../../assets/Partners/Apple.png';
import Sony from '../../assets/Partners/Sony.png';

import BackgroundAbout from '../../assets/Background About/Background.png';

export function Home() {
    return <main className="overflow-hidden max-w-screen-2xl m-auto lg:px-10">
        <section className="flex flex-wrap items-center bg-[#E8E8E8] py-7 px-5 md:px-20 rounded-3xl m-4 md:justify-between">
            <div className="m-auto md:m-0 md:w-1/2">
                <h1 className="text-2xl mb-3 lg:text-4xl">Your Go-To Hub for <span className="font-bold">Smart Tech Solutions!</span></h1>
                <p className="text-xsm text-sm font-light mb-10">Innovative Gadgets, Unmatched Convenience, Always Within Reach</p>
                <Link to="shop" className="bg-black text-sm text-white font-semibold py-2 px-5 rounded-3xl inline-flex gap-2 items-center">
                    Check Shop 
                    <img src={ButtonArrow} alt="" className="w-2"/>
                </Link>
            </div>
            <img src={Headphones} alt="" className="my-2 max-w-lg w-[300px] m-auto md:m-0 md:w-1/2" />
        </section>

        <section className="my-10">
            <h2 className="text-xl lg:text-2xl mb-6 mx-4 w-64 lg:w-auto"><span className="font-semibold">The latest.</span> <span className="font-normal text-[#646464]">Take a look at what’s new, right now</span></h2>
            <div className="product-cards w-full flex gap-5 overflow-x-scroll p-2 px-4 no-scrollbar box-border snap-x scroll-px-4">
                <div className="product-card relative rounded-2xl w-[290px] h-[390px] lg:w-[calc(33%-10px)] lg:gap-0 lg:h-[35vw] overflow-hidden flex-shrink-0 snap-start max-h-[490px]" style={{ boxShadow: '0 0 11px 0 rgba(0, 0, 0, 0.25)' }}>
                    <div className="p-4 relative z-10">
                        <h3 className="font-semibold text-2xl">iPad Mini</h3>
                        <p className="text-xs">Thinstant Classic</p>
                        <p className="font-light text-xs my-2">Starting at $100</p>
                    </div>
                    <img className="object-cover absolute inset-0 w-full h-full z-0" src={Ipad} alt=""/>
                </div>
                <div className="product-card relative rounded-3xl w-[290px] h-[390px] lg:w-[calc(33%-10px)] lg:h-auto overflow-hidden flex-shrink-0 snap-start max-h-[490px]" style={{ boxShadow: '0 0 11px 0 rgba(0, 0, 0, 0.25)' }}>
                    <div className="py-4 px-3 relative z-10">
                        <h3 className="font-semibold text-2xl">Ultra Open Earbuds</h3>
                        <p className="text-xs">Color Chilled Lilac</p>
                        <p className="font-light text-xs my-2">Starting at $100</p>
                    </div>
                    <img className="object-cover absolute inset-0 w-full h-full z-0" src={UltraOpenEarbuds} alt="Ultra Open Earbuds"/>
                </div>
                <div className="product-card relative rounded-3xl w-[290px] h-[390px] lg:w-[calc(33%-10px)] lg:h-auto overflow-hidden flex-shrink-0 snap-start max-h-[490px]" style={{ boxShadow: '0 0 11px 0 rgba(0, 0, 0, 0.25)' }}>
                    <div className="py-4 px-3 relative z-10">
                        <h3 className="font-semibold text-2xl">FE 28–70 mm F2 GM</h3>
                        <p className="text-xs">Thinstant Classic</p>
                        <p className="font-light text-xs my-2">Starting at $100</p>
                    </div>
                    <img className="object-cover absolute inset-0 w-full h-full z-0" src={FE2870mmF2GM} alt="FE 28–70 mm F2 GM"/>
                </div>
            </div>
        </section>

        <section>
            <h2 className="text-xl text-[#646464] my-5 mx-4 lg:text-2xl">Our <span className="font-semibold text-black">Partners</span></h2>
                <div className="partner-cards w-full flex gap-5 overflow-x-scroll p-2 px-4 no-scrollbar box-border snap-x scroll-px-4">
                    <div className="partner-card flex-shrink-0 snap-start lg:flex-1"><img src={Bose} alt="Bose" className="w-64 lg:w-auto mx-auto"/></div>
                    <div className="partner-card flex-shrink-0 snap-start lg:flex-1"><img src={Apple} alt="Apple" className="w-64 lg:w-auto mx-auto"/></div>
                    <div className="partner-card flex-shrink-0 snap-start lg:flex-1"><img src={Sony} alt="Sony" className="w-64 lg:w-auto mx-auto"/></div>
                </div>
        </section>

        <section>
            <div className="features flex flex-col md:flex-row gap-20 md:gap-0 lg:gap-20  align-center justify-center py-20 ">
                <div className="features-child">
                    <img src={FreeShipping} alt="" className="m-auto"/>
                    <h1 className="text-center font-bold text-xl my-2">Free Shipping</h1>
                    <p className="text-center w-60 m-auto text-sm font-light">Free shipping for products 200$ and above</p>
                </div>
                <div className="features-child">
                    <img src={FlexiblePayment} alt="" className="m-auto"/>
                    <h1 className="text-center font-bold text-xl my-2">Flexible Payment</h1>
                    <p className="text-center w-60 m-auto text-sm font-light">Enjoy no-hassle payments</p>
                </div>
                <div className="features-child">
                    <img src={EarnPoints} alt="" className="m-auto"/>
                    <h1 className="text-center font-bold text-xl my-2">Earn Points</h1>
                    <p className="text-center w-60 m-auto text-sm font-light">Earn points to enjoy bonuses, on your future purchase</p>
                </div>
            </div>
        </section>

        <section className="relative py-52">
            <div className="relative z-10 flex flex-col">
                <img src={logo} alt="" className="w-52 m-auto"/>
                <h3 className="text-base font-light w-fit m-auto mt-3 mb-10">Learn More About Us</h3>
                <Link to="about" className="bg-black text-sm text-white font-semibold py-2 px-5 rounded-3xl inline-flex gap-2 items-center m-auto">
                    Check About Us
                    <img src={ButtonArrow} alt="" className="w-2"/>
                </Link>
            </div>
            <img src={BackgroundAbout} alt="" className="absolute max-w-[720px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"/>
        </section>

        <section className="bg-gradient-to-tr from-[#4B6299] from-10% to-[#7DA4FF] to-90% my-12 mx-4 py-8 px-10 rounded-2xl">
            <h1 className="font-bold text-white text-4xl">Contact Us</h1>
            <p className="font-normal text-base text-white my-4">We are ready to answer your questions</p>
            <form className="mt-20">
                <input type="text" name="" id="" placeholder="Name" className="block w-full border-b-2 border-b-white bg-transparent placeholder-white my-4 pb-1 max-w-lg"/>
                <input type="text" name="" id="" placeholder="Email" className="block w-full border-b-2 border-b-white bg-transparent placeholder-white my-4 pb-1 max-w-lg"/>
                <Button type="submit" className="bg-transparent border-2 border-white text-white font-semibold py-2 px-5 mt-12  rounded-3xl inline-flex gap-2 items-center justify-center max-w-lg">
                    Contact Us
                    <img src={ButtonArrow} alt="" className="w-2"/>
                </Button>
            </form>
        </section>
    </main>
}