import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import App from "./App";

describe("App", () => {

    beforeEach(()=>{
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        )
    })
    
    it("Header exists?", () => {
        expect(screen.getByTestId('header-component')).toBeInTheDocument();
    });

    it("footer exists?", () => {
        expect(screen.getByTestId('footer-component')).toBeInTheDocument();
    })
  });