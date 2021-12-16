//react libraries
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

//components
import Starships from "./index";

//context, hooks
import { ShipContextProvider } from "../../context/shipContext";
import { LoginContextProvider } from "../../context/loginContext";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { act } from "react-dom/test-utils";

//defining result for mocked API call
const res = {
    data: {
        results: [
            {
                name: "Star Destroyer",
                model: "Imperial I-class Star Destroyer",
                manufacturer: "Kuat Drive Yards",
                cost_in_credits: "150000000",
                length: "1,600",
                max_atmosphering_speed: "975",
                crew: "47,060",
                passengers: "n/a",
                cargo_capacity: "36000000",
                consumables: "2 years",
                hyperdrive_rating: "2.0",
                MGLT: "60",
                starship_class: "Star Destroyer",
                pilots: [],
                films: [
                    "https://swapi.py4e.com/api/films/1/",
                    "https://swapi.py4e.com/api/films/2/",
                    "https://swapi.py4e.com/api/films/3/",
                ],
                created: "2014-12-10T15:08:19.848000Z",
                edited: "2014-12-20T21:23:49.870000Z",
                url: "https://swapi.py4e.com/api/starships/3/",
            },
        ],
    },
};

//mocking axios and custom hook
jest.mock("axios");
jest.mock("../../hooks/useIntersectionObserver");

//tests
test("Rendering spinner", () => {
    axios.get.mockResolvedValueOnce(res);
    useIntersectionObserver.mockReturnValue(() => null);
    render(
        <BrowserRouter>
            <LoginContextProvider>
                <ShipContextProvider>
                    <Starships />
                </ShipContextProvider>
            </LoginContextProvider>
        </BrowserRouter>
    );
    const spinner = screen.getByRole("status", { name: "spinner" });
    expect(spinner).toBeInTheDocument();
});

test("Get data from API call", async () => {
    axios.get.mockResolvedValueOnce(res);
    useIntersectionObserver.mockReturnValue(() => null);
    render(
        <BrowserRouter>
            <LoginContextProvider>
                <ShipContextProvider>
                    <Starships />
                </ShipContextProvider>
            </LoginContextProvider>
        </BrowserRouter>
    );
    const model = await screen.findByText(/Imperial I-class Star Destroyer/i);
    expect(model).toBeInTheDocument();
});
