import { render, screen } from "@testing-library/react";
import { App } from "@/App";


jest.mock("@/assets/react.png", () => ("image-mock"));

describe("App", () => {
	it("renders correctly", () => {
		render(<App />);
		const sut = screen.getByText(/Hello World/);

		expect(sut).toBeInTheDocument();
	});
});
