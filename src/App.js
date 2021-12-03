import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShipContextProvider } from "./context/shipContext";
import Home from "./pages/Home";
import Starships from "./pages/Starships";
import StarshipDetails from "./pages/StarshipDetails";

function App() {
    return (
        <ShipContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/starships" element={<Starships />} />
                    <Route
                        path="/starship-details"
                        element={<StarshipDetails />}
                    />
                </Routes>
            </BrowserRouter>
        </ShipContextProvider>
    );
}

export default App;
