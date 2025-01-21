import { faBell, faStore } from "@fortawesome/free-solid-svg-icons";
import ApplicationCard from "../../components/UI/ApplicationCard";
import Panel from "../../components/UI/Panel";
import PanelTitle from "../../components/UI/PanelTitle";
import Notification from "../../components/UI/Notification";
import { mockNotifications } from "../../data/mockData";

const LandingPage = () => {

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Panel bgColor="#F2FFF4">
                <PanelTitle icon={faStore} title="Applications" />
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
            </Panel>
            <Panel bgColor="#D5E6F6">
                <PanelTitle icon={faBell} title="Notifications" />
                {mockNotifications.map((notification, index) => {
                    return <Notification key={index} title={notification.title} type={notification.type} />                    
                })}
            </Panel>
        </div>
    );

}

export default LandingPage;