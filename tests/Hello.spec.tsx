import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import Hello from "../src/pages/Hello"

describe("Hello", () => {

    afterEach(() => {
        cleanup()
    })

    it("Should be equal true", () => {
        expect(true).toBe(true)
    })

    it('should display text Hello world!', () => {
        render(<Hello />);
        const appElement = screen.getByTestId("app")
        expect(appElement).toHaveTextContent("Hello world!")
    });
})