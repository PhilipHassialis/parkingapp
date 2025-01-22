import { faBell, faGear, faQuestion, faSquareParking, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ApplicationNavBarIcons = () => {

    return (
        <div className="application-navbar-icons">
            <FontAwesomeIcon icon={faSquareParking} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faQuestion} />
            <FontAwesomeIcon icon={faGear} />
            <FontAwesomeIcon icon={faBell} />
        </div>
    )

}

export default ApplicationNavBarIcons;