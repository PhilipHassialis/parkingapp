import { faBell, faStore } from "@fortawesome/free-solid-svg-icons";
import ApplicationCard from "../../components/UI/ApplicationCard";
import Panel from "../../components/UI/Panel";
import PanelTitle from "../../components/UI/PanelTitle";
import { mockNotifications } from "../../data/mockData";
import NotificationList from "../../components/UI/NotificationList";
import LandingMenu from "../../components/UI/LandingMenu";
import LandingCalendar from "../../components/UI/LandingCalendar";
import UserHeroCard from "../../components/UI/UserHeroCard";
import useUserStore from "../../data/userData";

const LandingPage = () => {

    const userStore = useUserStore();
    const userName = userStore.user ? userStore.user?.name : "";
    const userEmail = userStore.user ? userStore.user?.email : "";

    return (<>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="landing-page-left content">
                <Panel bgColor="white">
                <UserHeroCard user={{ name: userName , role: "The user role", image: "", email: userEmail }} isLanding={true} />
                </Panel>
                <LandingMenu />
            </div>
            <div className="landing-page-central-content">
                <Panel bgColor="#F9F3FF">
                    <PanelTitle icon={faStore} title="Parking Status" />
                    <LandingCalendar />
                </Panel>
                <Panel bgColor="#F2FFF4">

                    <PanelTitle icon={faStore} title="Applications" />
                    <div className="applications-card-row">
                        <ApplicationCard title="Application"
                            content="Go to the application"
                            relativeUrl="/application"
                            bgColour="lightgrey" />
                        <ApplicationCard title="Parking Complaints"
                            content="Register a parking complaint against a car already parked at your designated spot"
                            relativeUrl="/application/parking-complaints"
                            bgColour="#98C5C2" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row", flexWrap: "wrap" }}>
                        <ApplicationCard title="Parking Allocation"
                            content="Allocate a parking spot to a car"
                            relativeUrl="/application/parking-allocation"
                            bgColour="#D5C4E7" />
                        <ApplicationCard title="My Car"
                            content="Register your car in the system"
                            relativeUrl="/application/my-car"
                            bgColour="#D5E6F6" />
                    </div>
                </Panel>
            </div>
            <Panel bgColor="#D5E6F6">
                <PanelTitle icon={faBell} title="Notifications" />
                <NotificationList notifications={mockNotifications} />
            </Panel>
        </div>
    </>
    );

}

export default LandingPage;