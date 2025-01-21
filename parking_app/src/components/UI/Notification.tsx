import { faExclamationCircle, faExclamationTriangle, faInfoCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NotificationProps } from "./uicomponents-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notification = ({ title, type }: NotificationProps) => {

    return (
        <div className="notification">
            <div>
                {(() => {
                    switch (type) {
                        case "info":
                            return <FontAwesomeIcon icon={faInfoCircle} style={{ color: "#215487" }} />
                        case "warning":
                            return <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: "orange" }} />
                        case "error":
                            return <FontAwesomeIcon icon={faExclamationCircle} style={{ color: "red" }} />
                        default:
                            return <FontAwesomeIcon icon={faInfoCircle} style={{ color: "green" }} />
                    }
                }
                )()}{" "}
                {title}
            </div>
            <div>
            </div>
            <div>
                <FontAwesomeIcon icon={faXmark} style={{cursor: "pointer"}} />
            </div>
        </div>
    )


}

export default Notification;