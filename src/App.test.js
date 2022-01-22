import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains the word home", () => {
    render(<App />);
    const home = screen.getByText(/home/i);
    expect(home).toBeInTheDocument();
});
