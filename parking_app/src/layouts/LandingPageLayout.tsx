import { Outlet } from "react-router";
import ApplicationNavBar from "../components/ApplicationNavBar";

const LandingPageLayout = (  ) => {
  return (
    <div>
      <ApplicationNavBar />
      <Outlet />
    </div>
  );
}

export default LandingPageLayout;