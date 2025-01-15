import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from './Header';
import { MemoryRouter } from "react-router-dom"; 
import userEvent from "@testing-library/user-event";
import { CartContext } from "../../App/App";

describe("Header Component", () => {
    const mockCart = [];

    beforeEach(() => {
        render(
            <CartContext.Provider value={{ cart: mockCart }}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </CartContext.Provider>
        );
    });

    it("renders the Header component", () => {
        expect(screen.getByTestId('header-component')).toBeInTheDocument();
    });

    it("contains the site logo element", () => {
        const logo = screen.getByTestId('has-logo');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', '/src/assets/Logo.svg');
    });

    it("contains the navigation element", () => {
        expect(screen.getByTestId('has-nav')).toBeInTheDocument();
    });

    it("navigation contains expected links and buttons", () => {
        const nav = screen.getByTestId('has-nav');
        
        // Check for the "Home" link
        const homeLink = screen.getByRole('link', { name: /home/i });
        expect(nav).toContainElement(homeLink);
        expect(homeLink).toHaveAttribute('href', '/');

        // Check for the "Shop" link
        const shopLink = screen.getByRole('link', { name: /shop/i });
        expect(nav).toContainElement(shopLink);
        expect(shopLink).toHaveAttribute('href', '/shop');

        // Check for the "About" link
        const aboutLink = screen.getByRole('link', { name: /about/i });
        expect(nav).toContainElement(aboutLink);
        expect(aboutLink).toHaveAttribute('href', '/about');
    });

    it("shows cart when cart button is clicked", async () => {
        const user = userEvent.setup();
        const button = screen.getByText("Cart");

        await user.click(button);

        const cartItem = screen.getByTestId('cart-shows');
        expect(cartItem).toBeInTheDocument();
    });
});
