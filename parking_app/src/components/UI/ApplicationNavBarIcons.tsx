import { faBell, faGear, faQuestion, faSquareParking, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const ApplicationNavBarIcons = () => {

    return (
        <div className="application-navbar-icons">
            <Link to={"/"} className="linkText">
                <FontAwesomeIcon icon={faSquareParking} />
            </Link>
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faQuestion} />
            <FontAwesomeIcon icon={faGear} />
            <FontAwesomeIcon icon={faBell} />
        </div>
    )

}

export default ApplicationNavBarIcons;