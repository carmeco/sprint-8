import { List } from "./MenuLogin.styles";
import { Link } from "react-router-dom";

const MenuLogin = () => {
    return (
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
