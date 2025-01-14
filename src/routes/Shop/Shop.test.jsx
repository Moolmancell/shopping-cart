import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Shop } from "./Shop";

global.fetch = vi.fn();

describe("Shop", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Reset fetch mock before each test
  });

  it("shop is rendered", () => {
    render(<Shop />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("check if fetch has been called in Shop mock", async () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve([]),
    });
    render(<Shop />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  });

  it("check if shop items are displayed", async () => {
    fetch.mockResolvedValueOnce({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            title: "Product 1",
            price: 100,
          },
        ]),
    });
    render(<Shop />);
    await waitFor(() =>
      expect(screen.getAllByTestId("product-card-component")[0]).toBeInTheDocument()
    );
  });

  it("shows the error screen if fetch fails", async () => {
    fetch.mockRejectedValueOnce(new Error("Fetch failed")); 
    render(<Shop />);

    await waitFor(() =>
      expect(screen.getByText(/loading error/i)).toBeInTheDocument()
    );
    expect(screen.getByText(/try again/i)).toBeInTheDocument(); 
  });
});
