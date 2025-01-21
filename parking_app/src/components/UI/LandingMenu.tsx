import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mockMenuItems } from "../../data/mockData";
import { Link } from "react-router";

const LandingMenu = () => {

    return (<div className="landing-menu">
        <div>
            {mockMenuItems.map((item, index) => (<div className="landing-menu-item" key={index}>
                <Link to={item.relativeUrl} className="linkText" >
                    <h3>{item.menuEntry}</h3>
                </Link>
            </div>))}
        </div>
        <div></div>
        <div className="landing-menu-logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
            {" "}
            Logout
        </div>
    </div>)

}

export default LandingMenu;