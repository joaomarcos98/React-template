import { render, screen } from "@testing-library/react";
import { App } from "../src/App";

describe("App", () => {
    test("renders correctly", () => {
        render(<App />)
        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
