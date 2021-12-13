import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginContext } from "./context/loginContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Starships from "./pages/Starships";
import StarshipDetails from "./pages/StarshipDetails";

const Routing = () => {
    const { isLogged } = useContext(LoginContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/starships"
                    element={
                        isLogged ? (
                            <Starships />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />
                <Route path="/starships/:index" element={<StarshipDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
