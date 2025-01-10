import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {Header} from './Header'

describe("Header", () => {
    
    let container;
    beforeEach(() => {
        container = render(<Header />);
    });

    it("Footer rendered?", () => {
        expect(screen.getByTestId('header-component')).toBeInTheDocument();
    });

    it("Has site logo element?", () => {
        expect(screen.getByTestId('has-logo')).toBeInTheDocument();
    });

    it("Has navs element?", () => {
        const nav = screen.getByTestId('has-nav');
        expect(nav).toBeInTheDocument();     
    });
    it("Has navs have Home link?", () => {
        expect(screen.getByTestId('has-nav')).toContainElement(screen.getByText('Home'));
    });
    it("Has navs have Shop link?", () => {
        expect(screen.getByTestId('has-nav')).toContainElement(screen.getByText('Shop'));
    });
    
});