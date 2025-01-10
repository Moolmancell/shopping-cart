import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    it("Header exists?", () => {
        render(<App/>)
        expect(screen.getByTestId('header-component')).toBeInTheDocument();
    });

    it("footer exists?", () => {
        render (<App/>)
        expect(screen.getByTestId('footer-component')).toBeInTheDocument();
    })
  });