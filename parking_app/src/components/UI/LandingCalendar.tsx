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
        // TODO: fetch actual parking events from the backend
        // TODO: provide a proper onClickFn
        return week.map((date, index) => {
            return (<LandingCalendarItem date={date} 
                key={index}
                hasParkingEvent={index%2===0}  
                onClickFn={(x)=>console.log(x)} />)
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