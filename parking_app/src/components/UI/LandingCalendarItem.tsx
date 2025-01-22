import { faCircle, faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { LandingCalendarItemProps } from "../../types/uicomponents-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingCalendarItem = ({ date, hasParkingEvent, onClickFn }: LandingCalendarItemProps) => {

    const today = new Date();
    const isActive = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();

    return (<div className="landing-calendar-item-container">
        <div className={`landing-calendar-item ${isActive ? "currentDay" : "otherDay"}`} onClick={() => { onClickFn && onClickFn(date) }} >
            <h3 className={`landing-calendar-item-dayname ${isActive ? "currentDay" : "otherDay"}`}>{date.toLocaleDateString("en-us", { "weekday": "short" })}</h3>
            <h3>{date.getDate()}</h3>
        </div>
        <div className={`landing-calendar-item-icon ${hasParkingEvent ? "active" : "normal"}`} 
            onClick={() => { onClickFn && onClickFn(date) }}
        >
            {hasParkingEvent ? (<FontAwesomeIcon icon={faSquareParking} />) : <FontAwesomeIcon icon={faCircle} />}
        </div>
    </div>)
}

export default LandingCalendarItem;