import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import userEvent from "@testing-library/user-event";
import {CartItem} from './CartItem'

describe("CartItem Component", () => {
    it("CartItem exists?", () => {
        render(
            <CartItem name="Product" price="$200"/>
        )
        expect(screen.getByRole('heading')).toBeInTheDocument()
    });
});
