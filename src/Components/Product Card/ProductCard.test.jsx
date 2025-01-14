import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductCard } from './ProductCard';

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
});
