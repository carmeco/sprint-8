import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
import { List } from "./MenuLogin.styles";
import { Link } from "react-router-dom";

const MenuLogin = () => {
    const { isLogged, userLogged, setIsLogged } = useContext(LoginContext);

    const handleClick = (event) => {
        event.preventDefault();
        setIsLogged(false);
    };

    return isLogged ? (
        <List>
            <li>Hello {userLogged.userName}</li>
            <li>/ /</li>
            <li>
                <Link to="/home" onClick={handleClick}>
                    Log out
                </Link>
            </li>
        </List>
    ) : (
        <List>
            <li>
                <Link to="/login">Log In</Link>
            </li>
            <li>/ /</li>
            <li>
                <Link to="/signup">Sign Up</Link>
            </li>
        </List>
    );
};

export default MenuLogin;
