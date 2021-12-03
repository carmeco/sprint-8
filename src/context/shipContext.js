import { createContext, useState } from "react";

const ShipContext = createContext();

const ShipContextProvider = ({ children }) => {
    const [ship, setShip] = useState(null);

    return (
        <ShipContext.Provider value={{ ship, setShip }}>
            {children}
        </ShipContext.Provider>
    );
};

export { ShipContext, ShipContextProvider };
