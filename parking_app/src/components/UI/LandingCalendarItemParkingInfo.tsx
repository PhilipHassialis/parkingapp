import { CalendarItemParkingInfoProps } from "./uicomponents-types";

const LandingCalendarItemParkingInfo = ({ item }: { item?: CalendarItemParkingInfoProps }) => {

    return (<div className="landing-calendar-item-parkingInfo">
        {item && (
            <>
                <div className="landing-calendar-item-parkingInfo-text">
                    <span className="landing-calendar-item-parkingInfo-text-title">Zone:</span>
                    {item.zone}
                </div>
                <div className="landing-calendar-item-parkingInfo-text">
                    <span className="landing-calendar-item-parkingInfo-text-title">Position:</span>
                    {item.position}
                </div>
            </>
        )}
    </div>)
}

export default LandingCalendarItemParkingInfo;