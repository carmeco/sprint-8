//from react
import { useContext } from "react";
import { Link } from "react-router-dom";

//context
import { LoginContext } from "../../context/loginContext";

//styles
import { List } from "./MenuLogin.styles";

const MenuLogin = () => {
    //hooks
    const { isLogged, userLogged, setIsLogged } = useContext(LoginContext);

    //log out
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
