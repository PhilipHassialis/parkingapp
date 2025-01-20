import { Route, Routes } from "react-router";
import LandingPageLayout from "./layouts/LandingPageLayout";
import LandingPage from "./pages/landingpage/LandingPage";

const ParkingRoutes = () => {

    return (
        <Routes>
            <Route element = {<LandingPageLayout />}>
                <Route index element = {<LandingPage />} />
            </Route>
        </Routes>
    )
    
}

export default ParkingRoutes;