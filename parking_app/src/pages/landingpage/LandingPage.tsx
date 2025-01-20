import ApplicationCard from "../../components/UI/ApplicationCard";

const LandingPage = () => {

    return (
        <div>
            <h1>Landing Page</h1>
            <ApplicationCard title="Application" 
                content="Go to the application" 
                relativeUrl="/application" 
                bgColour="lightgrey" />
            <ApplicationCard title="Parking Complaints" 
                content="Register a parking complaint against a car already parked at your designated spot" 
                relativeUrl="/parking-complaints" 
                bgColour="#98C5C2" />
            <ApplicationCard title="Parking Allocation"
                content="Allocate a parking spot to a car" 
                relativeUrl="/parking-allocation" 
                bgColour="#D5C4E7" />
            <ApplicationCard title="My Car"
                content="Register your car in the system" 
                relativeUrl="/my-car" 
                bgColour="#D5E6F6" />                
        </div>
    );

}

export default LandingPage;