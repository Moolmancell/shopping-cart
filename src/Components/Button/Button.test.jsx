import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Button} from './Button'

describe("Button", () => {
    let mockOnClick

    beforeEach(() => {
        mockOnClick = vi.fn();
        render(<Button onClick={()=>mockOnClick()}>Button</Button>)
    })

    it("Button rendered?", () => {
        expect(screen.getByTestId('button-component')).toBeInTheDocument();
        expect(screen.getByText(/button/i)).toBeInTheDocument();
    });

    it("Button clicked?", async () => {
        const user = userEvent.setup();
        const button = screen.getByTestId('button-component');

        await user.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});