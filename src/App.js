import { ShipContextProvider } from "./context/shipContext";
import { LoginContextProvider } from "./context/loginContext";
import Routing from "./Routing";

function App() {
    return (
        <LoginContextProvider>
            <ShipContextProvider>
                <Routing />
            </ShipContextProvider>
        </LoginContextProvider>
    );
}

export default App;
