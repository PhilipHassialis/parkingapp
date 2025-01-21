import LandingCalendarItem from "./LandingCalendarItem";

const LandingCalendar = () => {

    const today = new Date();
    const firstDateOfCurrentWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    // const lastDateOfCurrentWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));

    const getWeek = (firstDate: Date) => {
        const week = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate() + i);
            week.push(date);
        }
        return week.map((date, index) => {
            return (<LandingCalendarItem date={date} key={index} />)
        })
    }


    return (<div>
        <div className="landing-calendar">
            <div className="landing-calendar-week">
                {getWeek(firstDateOfCurrentWeek)}
            </div>

        </div>

    </div>)



}

export default LandingCalendar;