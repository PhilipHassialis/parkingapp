import { Outlet, useNavigate } from "react-router";
import ApplicationNavBar from "../components/ApplicationNavBar";
import SideBarMenu from "../components/SideBarMenu";
import useUserStore from "../data/userData";
import { useEffect } from "react";

const ApplicationLayout = () => {

    const userInfo = useUserStore(state => state.user);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!userInfo) {
        navigate("/login");
      }
    }, [userInfo, navigate]);

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