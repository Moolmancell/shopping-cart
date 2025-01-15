import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { MemoryRouter } from "react-router-dom";

describe("Sidebar Component", () => {
    it("renders Sidebar component", () => {
        render(
        <MemoryRouter>
            <Sidebar />
        </MemoryRouter>
        );
        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/shop/i)).toBeInTheDocument();
        expect(screen.getByText(/about/i)).toBeInTheDocument();
        expect(screen.getByText(/x/i)).toBeInTheDocument();
    });

    it("renders Sidebar with the right elements", () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );
        expect(screen.getAllByRole("link")).toHaveLength(3);
        expect(screen.getByRole("button")).toBeInTheDocument();
    })
})