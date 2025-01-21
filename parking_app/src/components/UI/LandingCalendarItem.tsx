import { LandingCalendarItemProps } from "./uicomponents-types";

const LandingCalendarItem = ({date}:LandingCalendarItemProps) => {

    const today = new Date();
    const isActive = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();

    return (<div className={`landing-calendar-item ${isActive?'active':'normal'}`} >
        <h3 className={`landing-calendar-item-dayname ${isActive?'active':'normal'}`}>{date.toLocaleDateString('en-us', {'weekday':'short'})}</h3>
        <h3>{date.getDate()}</h3>
    </div>)
}

export default LandingCalendarItem;