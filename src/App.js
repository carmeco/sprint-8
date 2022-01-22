//components
import Routing from "./Routing";

//context providers
import { ShipContextProvider } from "./context/shipContext";
import { LoginContextProvider } from "./context/loginContext";

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
