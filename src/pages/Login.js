import Layout from "../components/Layout";
import { Wrapper, Panel } from "./Login.styles";
import darth from "../images/darth.png";

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <Layout>
            <Wrapper>
                <img src={darth} alt="Darth Vader" />
                <Panel>
                    <h2>Hello again!</h2>
                    <p>
                        If it's your first time in the website, please sign up.
                    </p>
                    <form>
                        <ul>
                            <li>
                                <label for="user">User</label>
                                <br />
                                <input id="user" type="text"></input>
                            </li>
                            <li>
                                <label for="password">Password</label>
                                <br />
                                <input id="password" type="text"></input>
                            </li>
                            <li>
                                <input id="remember" type="checkbox"></input>
                                <label for="remember">Remember me</label>
                            </li>
                            <li>
                                <button onSubmit={handleSubmit}>Log in</button>
                            </li>
                        </ul>
                    </form>
                </Panel>
            </Wrapper>
        </Layout>
    );
};

export default Login;
