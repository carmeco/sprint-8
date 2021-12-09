import Layout from "../components/Layout";
import { Wrapper, Panel } from "./Singup.styles";
import yoda from "../images/yoda.png";

const Signup = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <Layout>
            <Wrapper>
                <img src={yoda} alt="Yoda" />
                <Panel>
                    <h2>First time in the website?</h2>
                    <p>
                        Welcome to the Star Wars unofficial website. Sign in to
                        get access to all the content.
                    </p>
                    <form>
                        <ul>
                            <li>
                                <label for="name">Name</label>
                                <br />
                                <input id="name" type="text"></input>
                            </li>
                            <li>
                                <label for="email">E-mail</label>
                                <br />
                                <input id="email" type="email"></input>
                            </li>
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
                                <button onSubmit={handleSubmit}>Sign In</button>
                            </li>
                        </ul>
                    </form>
                </Panel>
            </Wrapper>
        </Layout>
    );
};

export default Signup;
