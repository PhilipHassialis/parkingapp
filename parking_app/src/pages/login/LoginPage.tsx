import { useNavigate } from "react-router";
import useUserStore from "../../data/userData";
import InputBox from "../../components/UI/InputBox";
import PasswordBox from "../../components/UI/PasswordBox";
import React from "react";
import Logo from "../../components/UI/Logo";

const LoginPage = () => {

    const userStore = useUserStore();
    const navigate = useNavigate();

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");


    const login = () => {
        // console.log(userName, password);
        userStore.setUser({ name: userName, email: `${userName}@sword-group.com`, role: "admin", image: "" });
        navigate("/");
    }

    return (
        <div className="login-page">
            <div className="login-panel">
                <div >
                    <Logo />
                </div>
                <div className="login-panel-welcome">

                    Welcome!
                </div>
                <div className="login-panel-login-prompt">Login</div>
                <div className="login-panel-login-form">

                    <div className="login-panel-login-form-userinput">
                        <InputBox placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="login-panel-login-form-userinput">

                        <PasswordBox placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="login-panel-login-form-userinput">

                        <button className="login-panel-login-button" onClick={() => { login() }}>Login</button>
                    </div>
                    <div className="login-panel-login-form-userinput">
                        <div className="login-panel-login-form-rememberme">
                            <input type="checkbox" /> Remember me?
                        </div>
                        <div className="login-panel-login-form-forgotpassword">
                            <a href="/forgot-password">Forgot your password?</a>
                        </div>
                    </div>
                    <div className="login-panel-login-form-signup">
                        <span className="login-panel-login-form-signup-message">Don't have an account?</span>
                        <span className="login-panel-login-form-signup-link">
                            <a href="/sign-up">Sign Up</a>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default LoginPage;