import { Outlet } from "react-router";
import ApplicationNavBar from "../components/ApplicationNavBar";
import SideBarMenu from "../components/SideBarMenu";

const ApplicationLayout = () => {

    return (
        <>
        <ApplicationNavBar />
        <div style={{display: "flex"}}>
            <span>
                <SideBarMenu />
            </span>
            <span>
                <Outlet />
            </span>
        </div>
        </>
    );

}

export default ApplicationLayout;