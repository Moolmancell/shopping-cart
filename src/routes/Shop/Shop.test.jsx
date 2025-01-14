import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Shop } from "./Shop";
import { CartContext } from "../../App/App"; // Import the context
import userEvent from "@testing-library/user-event";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Test Product",
          price: 100,
          image: "test.jpg",
        },
        {
          id: 2,
          title: "Test Product 2",
          price: 100,
          image: "test.jpg",
        }
      ]),
  })
);

describe("Shop", () => {
  const mockAddToCart = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks(); // Reset fetch mock before each test
  });

  const renderWithContext = (ui) => {
    return render(
      <CartContext.Provider value={{ addToCart: mockAddToCart }}>
        {ui}
      </CartContext.Provider>
    );
  };

  it("shop is rendered", () => {
    renderWithContext(<Shop />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("check if fetch has been called in Shop mock", async () => {
    renderWithContext(<Shop />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  });

  it("check if shop items are displayed", async () => {
    renderWithContext(<Shop />);
    await waitFor(() =>
      expect(screen.getByText(/Test Product 2/i)).toBeInTheDocument()
    );
  });

  it("shows the error screen if fetch fails", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Network Error"))
    );

    renderWithContext(<Shop />);

    await waitFor(() =>
      expect(screen.getByText(/Loading error/i)).toBeInTheDocument()
    );
  });

  it("check if the Add To Cart Buttons updates the state", async () => {
    const user = userEvent.setup();
    renderWithContext(<Shop/>);
    await waitFor(async () => {
      const addToCartButton = screen.getAllByText(/add to cart/i)[0];
      console.log(mockAddToCart);
      await user.click(addToCartButton);
      expect(mockAddToCart).toHaveBeenCalledOnce();
      expect(mockAddToCart).toHaveBeenCalledWith({
        id: 1,
        title: "Test Product",
        price: 100,
        image: "test.jpg",
      });
    });
  })
  
});
