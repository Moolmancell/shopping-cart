import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {Footer} from './Footer'

describe("Footer", () => {
    it("Footer rendered?", () => {
        render(<Footer/>)
        expect(screen.getByTestId('footer-component')).toBeInTheDocument();
    });
});