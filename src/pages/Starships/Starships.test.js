import { render } from "@testing-library/react";
import Starships from ".";
import { ShipContextProvider } from "../../context/shipContext";
import { LoginContextProvider } from "../../context/loginContext";
import { BrowserRouter } from "react-router-dom";

test("Renders spinner", () => {
    const component = render(
        <BrowserRouter>
            <LoginContextProvider>
                <ShipContextProvider>
                    <Starships />
                </ShipContextProvider>
            </LoginContextProvider>
        </BrowserRouter>
    );
    const spinner = component.getByRole("status", { name: "spinner" });
    expect(spinner).toBeInTheDocument();
});
