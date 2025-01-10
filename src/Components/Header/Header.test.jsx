import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from './Header';

describe("Header Component", () => {
    beforeEach(() => {
        render(<Header />);
    });

    it("renders the Header component", () => {
        expect(screen.getByTestId('header-component')).toBeInTheDocument();
    });

    it("contains the site logo element", () => {
        const logo = screen.getByTestId('has-logo');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', '../../assets/Logo.svg');
    });

    it("contains the navigation element", () => {
        expect(screen.getByTestId('has-nav')).toBeInTheDocument();
    });

    it("navigation contains expected links and buttons", () => {
        const nav = screen.getByTestId('has-nav');
        
        // Check for the "Home" link
        const homeLink = screen.getByRole('link', { name: /home/i });
        expect(nav).toContainElement(homeLink);
        expect(homeLink).toHaveAttribute('href', '/home');

        // Check for the "Shop" link
        const shopLink = screen.getByRole('link', { name: /shop/i });
        expect(nav).toContainElement(shopLink);
        expect(shopLink).toHaveAttribute('href', '/shop');

        // Check for the "Cart" button
        const cartButton = screen.getByRole('button', { name: /cart/i });
        expect(nav).toContainElement(cartButton);
    });
});
