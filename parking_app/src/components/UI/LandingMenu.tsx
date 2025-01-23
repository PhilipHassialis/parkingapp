import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mockMenuItems } from "../../data/mockData";
import { Link, useNavigate } from "react-router";
import useUserStore from "../../data/userData";

const LandingMenu = () => {

    const userStore = useUserStore();
    const navigate = useNavigate();

    const logout = () => {
        userStore.setUser(null);
        navigate("/login");
    }

    return (<div className="landing-menu">
        <div>
            {mockMenuItems.map((item, index) => (<div className="landing-menu-item" key={index}>
                <Link to={item.relativeUrl} className="linkText" >
                    <h3>{item.menuEntry}</h3>
                </Link>
            </div>))}
        </div>
        <div></div>
        <div className="landing-menu-logout" onClick={logout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            {" "}
            Logout
        </div>
    </div>)

}

export default LandingMenu;