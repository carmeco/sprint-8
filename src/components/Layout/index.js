import Menu from "../Menu";
import Login from "../Login";

const Layout = ({ children }) => {
    return (
        <div>
            <h1>Star Wars</h1>
            <Login />
            <Menu />
            <div>{children}</div>
        </div>
    );
};

export default Layout;
