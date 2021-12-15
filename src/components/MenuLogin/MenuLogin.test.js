import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";

test("Log in button triggers log in page", () => {
    render(<App />);
    const loginButton = screen.getByRole("link", { name: /log in/i });
    fireEvent.click(loginButton);
    const helloAgain = screen.getByText(/hello again/i);
    expect(helloAgain).toBeInTheDocument();
});
