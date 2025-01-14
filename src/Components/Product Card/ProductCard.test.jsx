import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductCard } from './ProductCard';
import userEvent from "@testing-library/user-event";

describe("Product Card", () => {
    it("renders Product Card component", () => {
        render(
            <ProductCard
                name="Sample Product"
                price="$100"
                img="sample.jpg"
                img_alt="Sample Image"
            />
        );
        expect(screen.getByTestId('product-card-component')).toBeInTheDocument();
    });

    it("calls addToCart function when the button is clicked", async () => {
        const mockAddToCart = vi.fn(); 
        const mockProduct = {
          id: 1,
          name: "Sample Product",
          price: 100,
        };
    
        render(
          <ProductCard
            key={mockProduct.id}
            name={mockProduct.name}
            price={mockProduct.price}
            img="sample.jpg"
            img_alt="Sample Image"
            addToCart={() => mockAddToCart(mockProduct)} 
          />
        );
    
        const user = userEvent.setup();
        const addToCartButton = screen.getByRole("button", { name: /add to cart/i });
    
        await user.click(addToCartButton);
    
        expect(mockAddToCart).toHaveBeenCalledTimes(1);
        expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
      });
})
