import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShipContextProvider } from "./context/shipContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Starships from "./pages/Starships";
import StarshipDetails from "./pages/StarshipDetails";

function App() {
    return (
        <ShipContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/starships" element={<Starships />} />
                    <Route
                        path="/starships/:index"
                        element={<StarshipDetails />}
                    />
                </Routes>
            </BrowserRouter>
        </ShipContextProvider>
    );
}

export default App;
