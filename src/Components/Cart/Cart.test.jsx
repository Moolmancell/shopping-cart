import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import userEvent from "@testing-library/user-event";
import {Cart} from './Cart'

describe("Cart Component", () => {
    it("cart exists?", async () => {
        render(
            <Cart/>
        )
        expect(screen.getByText(/cart/i)).toBeInTheDocument()
    });
});
