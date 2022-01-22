//from react
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

//components
import Layout from "../../components/Layout";

//styles and images
import { Wrapper, Panel } from "./Singup.styles";
import yoda from "../../images/yoda.png";

const Signup = () => {
    //refs to the DOM
    const userInput = useRef(null);
    const passwordInput = useRef(null);

    //state for submit
    const [submit, setSubmit] = useState(false);

    //getting users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //form submitting
    const handleSubmit = (event) => {
        event.preventDefault();
        users.push({
            userName: userInput.current.value,
            password: passwordInput.current.value,
        });
        localStorage.setItem("users", JSON.stringify(users));
        setSubmit(true);
    };

    return (
        <Layout>
            <Wrapper>
                <img src={yoda} alt="Yoda" />
                {submit ? (
                    <Panel>
                        <h2>Hello {userInput.current.value}!</h2>
                        <p>
                            Congratulations, you've successfully signed up. Now
                            you can go to the{" "}
                            <Link to="/login">login page</Link>.
                        </p>
                    </Panel>
                ) : (
                    <Panel>
                        <h2>First time in the website?</h2>
                        <p>
                            Welcome to the Star Wars unofficial website. Sign in
                            to get access to all the content.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <ul>
                                <li>
                                    <label htmlFor="name">Name</label>
                                    <br />
                                    <input id="name" type="text"></input>
                                </li>
                                <li>
                                    <label htmlFor="email">E-mail</label>
                                    <br />
                                    <input id="email" type="email"></input>
                                </li>
                                <li>
                                    <label htmlFor="user">User</label>
                                    <br />
                                    <input
                                        id="user"
                                        type="text"
                                        ref={userInput}
                                        required
                                    ></input>
                                </li>
                                <li>
                                    <label htmlFor="password">Password</label>
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
                )}
            </Wrapper>
        </Layout>
    );
};

export default Signup;
