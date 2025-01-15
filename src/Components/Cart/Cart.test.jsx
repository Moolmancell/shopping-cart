import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import userEvent from "@testing-library/user-event";
import {Cart} from './Cart'
import { CartContext } from "../../App/App";

describe("Cart Component", () => {
    const mockCart = [
        {
            "id": 1,
            "title": "Product Item1",
            "price": 109,
            "description": "Another product",
            "category": "electronics",
            "image": "image.jpg",
            "rating": {
                "rate": 2.9,
                "count": 470
            },
            "quantity": 1
        },
        {
            "id": 9,
            "title": "Product Item2",
            "price": 64,
            "description": "Another product2",
            "category": "electronics",
            "image": "image.jpg",
            "rating": {
                "rate": 3.3,
                "count": 203
            },
            "quantity": 1
        }
    ]

    const renderWithContext = (ui) => {
        return render(
          <CartContext.Provider value={{ cart: mockCart }}>
            {ui}
          </CartContext.Provider>
        );
      };

    it("cart exists?", async () => {
        renderWithContext(<Cart/>);
        expect(screen.getByText(/cart/i)).toBeInTheDocument()
    });

    it("renders cart items", () => {
        renderWithContext(<Cart/>);
        
        expect(screen.getByText(/Product Item1/i)).toBeInTheDocument();
        expect(screen.getByText(/Product Item2/i)).toBeInTheDocument();

        // Check if prices are rendered
        expect(screen.getByText(/109/i)).toBeInTheDocument();
        expect(screen.getByText(/64/i)).toBeInTheDocument();

        // Check if images are rendered (assuming your component displays images)
        const productImages = screen.getAllByRole("presentation");
        expect(productImages).toHaveLength(2); // Assuming there are 2 images
    })
});
