import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { Wrapper, Panel } from "./Login.styles";
import darth from "../../images/darth.png";

const Login = () => {
    const userInput = useRef(null);
    const passwordInput = useRef(null);
    const remember = useRef(null);
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userSaved = JSON.parse(localStorage.getItem("userSaved"));

    useEffect(() => {
        if (userSaved) {
            userInput.current.value = userSaved.userName;
            passwordInput.current.value = userSaved.password;
        }
    }, [userSaved]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = users.find(
            (user) => user.userName === userInput.current.value
        );
        if (!user) {
            console.log("Usuari no registrat");
        } else if (user.password === passwordInput.current.value) {
            console.log("Benvingut");
            if (remember.current.value)
                localStorage.setItem("userSaved", JSON.stringify(user));
        } else {
            console.log("Contrasenya incorrecta");
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
                        </ul>
                    </form>
                </Panel>
            </Wrapper>
        </Layout>
    );
};

export default Login;
