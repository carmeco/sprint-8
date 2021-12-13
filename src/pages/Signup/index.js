//from react
import { useRef } from "react";

//components
import Layout from "../../components/Layout";

//styles and images
import { Wrapper, Panel } from "./Singup.styles";
import yoda from "../../images/yoda.png";

const Signup = () => {
    //hooks
    const userInput = useRef(null);
    const passwordInput = useRef(null);

    //getting data from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //form submitting
    const handleSubmit = (event) => {
        event.preventDefault();
        users.push({
            userName: userInput.current.value,
            password: passwordInput.current.value,
        });
        localStorage.setItem("users", JSON.stringify(users));
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
                    <form onSubmit={handleSubmit}>
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
                                <input
                                    id="user"
                                    type="text"
                                    ref={userInput}
                                    required
                                ></input>
                            </li>
                            <li>
                                <label for="password">Password</label>
                                <br />
                                <input
                                    id="password"
                                    type="password"
                                    ref={passwordInput}
                                    required
                                ></input>
                            </li>
                            <li>
                                <button type="submit">Sign Up</button>
                            </li>
                        </ul>
                    </form>
                </Panel>
            </Wrapper>
        </Layout>
    );
};

export default Signup;
