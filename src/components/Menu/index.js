//from react
import { Link } from "react-router-dom";

//styles
import { List } from "./Menu.styles";

const Menu = () => {
    return (
        <List>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/starships">Starships</Link>
            </li>
        </List>
    );
};

export default Menu;
