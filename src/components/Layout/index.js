//components
import Menu from "../Menu";
import MenuLogin from "../MenuLogin";

//styles and images
import { Header, Wrapper } from "./Layout.styles";
import logo from "../../images/logo.png";

const Layout = ({ children }) => {
    return (
        <div>
            <Header>
                <img alt="Star Wars" src={logo} width="205px" />
                <div>
                    <MenuLogin />
                </div>
            </Header>
            <Menu />
            <Wrapper>{children}</Wrapper>
        </div>
    );
};

export default Layout;
