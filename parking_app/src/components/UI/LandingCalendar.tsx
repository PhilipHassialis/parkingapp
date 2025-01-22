import { useState } from "react";
import LandingCalendarItem from "./LandingCalendarItem";
import LandingCalendarItemParkingInfo from "./LandingCalendarItemParkingInfo";
import { CalendarItemParkingInfoProps } from "./uicomponents-types";
import { mockParkingEvent } from "../../data/mockData";

const LandingCalendar = () => {


    // TODO: fetch actual parking events from the backend
    const todaysCondition = mockParkingEvent(new Date());
    const [parkingEventInfo, setParkingEventInfo] = useState<CalendarItemParkingInfoProps | undefined>(todaysCondition)

    const landingCalendarItemClick = (date: Date) => {
        date.getDate() % 2 === 0 ? setParkingEventInfo({zone: "A", position: `${date.getDate()%11+1}`}) : setParkingEventInfo(undefined);
    }

    const today = new Date();
    const firstDateOfCurrentWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());

    const getWeek = (firstDate: Date) => {
        const week = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate() + i);
            week.push(date);
        }
        // TODO: fetch actual parking events from the backend
        // TODO: provide a proper onClickFn
        return week.map((date, index) => {
            return (<LandingCalendarItem date={date}
                key={index}
                hasParkingEvent={date.getDate() % 2 === 0}
                onClickFn={()=>landingCalendarItemClick(date)} />)
        })
    }


    return (<div>
        <div className="landing-calendar">
            <div className="landing-calendar-week">
                {getWeek(firstDateOfCurrentWeek)}
            </div>
        </div>
        <LandingCalendarItemParkingInfo item={parkingEventInfo} />
    </div>)



}

export default LandingCalendar;