import { BrowserRouter, Routes, Route } from "react-router-dom";
import Starships from "./pages/Starships";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Starships />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
