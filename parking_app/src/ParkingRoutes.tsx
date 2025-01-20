import { Route, Routes } from "react-router";
import LandingPageLayout from "./layouts/LandingPageLayout";
import LandingPage from "./pages/landingpage/LandingPage";
import ApplicationLayout from "./layouts/ApplicationLayout";
import HomePage from "./pages/homepage/HomePage";

const ParkingRoutes = () => {

    return (
        <Routes>
            <Route element = {<LandingPageLayout />}>
                <Route index element = {<LandingPage />} />
            </Route>
            <Route path="/application" element = {<ApplicationLayout />}>
                <Route index element = {<HomePage />} />
            </Route>
        </Routes>
    )
    
}

export default ParkingRoutes;