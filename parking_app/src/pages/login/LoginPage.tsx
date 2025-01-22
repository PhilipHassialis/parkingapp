import { useNavigate } from "react-router";
import useUserStore from "../../data/userData";

const LoginPage = () => {

    const userStore = useUserStore();
    const navigate = useNavigate();


    const login = () => {
        userStore.setUser({name: "John Doe", email: "john.doe@sword-group.com", role: "admin", image:""});
        navigate("/");
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={()=>{login()}}>Login</button>
        </div>
    );

}

export default LoginPage;