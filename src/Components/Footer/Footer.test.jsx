import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {Footer} from './Footer'
import { MemoryRouter } from "react-router-dom";

describe("Footer", () => {
    it("Footer rendered?", () => {
        render(
        <MemoryRouter>
            <Footer/>
        </MemoryRouter>
        )
        expect(screen.getByTestId('footer-component')).toBeInTheDocument();
    });
});