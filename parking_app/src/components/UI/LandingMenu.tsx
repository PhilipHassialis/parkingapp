import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mockMenuItems } from "../../data/mockData";

const LandingMenu = () => {

    return (<div className="landing-menu">
        <div>
            {mockMenuItems.map((item, index) => (<div className="landing-menu-item" key={index}>{item}</div>))}
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