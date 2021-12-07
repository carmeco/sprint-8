import { List } from "./Login.styles";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <List>
            <li>
                <Link to="/home">Log In</Link>
            </li>
            <li>/ /</li>
            <li>
                <Link to="/home">Sign Up</Link>
            </li>
        </List>
    );
};

export default Login;
