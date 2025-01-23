import { useNavigate } from "react-router";
import useUserStore from "../../data/userData";
import InputBox from "../../components/UI/InputBox";
import PasswordBox from "../../components/UI/PasswordBox";
import React from "react";

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
        <div>
            <h1>Login Page</h1>
            <div style={{width:"10em"}}>
                <InputBox placeholder="Username" value={userName} onChange={(e)=>setUserName(e.target.value)} />
            </div>
            <div  style={{width:"10em"}}>

                <PasswordBox placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button onClick={() => { login() }}>Login</button>
        </div>
    );

}

export default LoginPage;