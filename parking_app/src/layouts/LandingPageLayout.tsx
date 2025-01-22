import { Outlet, useNavigate } from "react-router";
import ApplicationNavBar from "../components/ApplicationNavBar";
import useUserStore from "../data/userData";
import { useEffect } from "react";

const LandingPageLayout = () => {

  const userInfo = useUserStore(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);


  return (
    <div>
      <ApplicationNavBar />
      <Outlet />
    </div>
  );
}

export default LandingPageLayout;