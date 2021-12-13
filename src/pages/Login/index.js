//from react
import { useRef, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

//context
import { LoginContext } from "../../context/loginContext";

//components
import Layout from "../../components/Layout";

//styles and images
import { Wrapper, Panel } from "./Login.styles";
import darth from "../../images/darth.png";

const Login = () => {
    //hooks
    const userInput = useRef(null);
    const passwordInput = useRef(null);
    const remember = useRef(null);

    const [feedback, setFeedback] = useState("");

    const { setIsLogged, setUserLogged } = useContext(LoginContext);

    useEffect(() => {
        if (userSaved) {
            userInput.current.value = userSaved.userName;
            passwordInput.current.value = userSaved.password;
        }
    }, [userSaved]);

    //getting data from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userSaved = JSON.parse(localStorage.getItem("userSaved"));

    //form submitting
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = users.find(
            (user) => user.userName === userInput.current.value
        );
        if (!user) {
            setFeedback("Usuari no registrat");
        } else if (user.password === passwordInput.current.value) {
            setIsLogged(true);
            setUserLogged(user);
            if (remember.current.value)
                localStorage.setItem("userSaved", JSON.stringify(user));
        } else {
            setFeedback("Contrasenya incorrecta");
        }
    };

    return (
        <Layout>
            <Wrapper>
                <img src={darth} alt="Darth Vader" />
                <Panel>
                    <h2>Hello again!</h2>
                    <p>
                        If it's your first time in the website, please{" "}
                        <Link to="/signup"> sign up</Link>.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <ul>
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
                                <input
                                    id="remember"
                                    type="checkbox"
                                    ref={remember}
                                ></input>
                                <label for="remember">Remember me</label>
                            </li>
                            <li>
                                <button type="submit">Log in</button>
                            </li>
                            <li>{feedback}</li>
                        </ul>
                    </form>
                </Panel>
            </Wrapper>
        </Layout>
    );
};

export default Login;
