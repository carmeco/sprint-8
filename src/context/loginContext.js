import { createContext, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(null);
    const [userLogged, setUserLogged] = useState(null);

    return (
        <LoginContext.Provider
            value={{ isLogged, setIsLogged, userLogged, setUserLogged }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export { LoginContext, LoginContextProvider };
