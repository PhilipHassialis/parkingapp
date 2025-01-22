import { Route, Routes } from "react-router";
import LandingPageLayout from "./layouts/LandingPageLayout";
import LandingPage from "./pages/landingpage/LandingPage";
import ApplicationLayout from "./layouts/ApplicationLayout";
import HomePage from "./pages/homepage/HomePage";
import MyCar from "./pages/mycar/MyCar";
import ParkingComplaints from "./pages/parkingcomplaints/ParkingComplaints";
import ParkingAllocations from "./pages/parkingallocations/ParkingAllocations";

const ParkingRoutes = () => {

    return (
        <Routes>
            <Route element = {<LandingPageLayout />}>
                <Route index element = {<LandingPage />} />
            </Route>
            <Route path="application" element = {<ApplicationLayout />}>
                <Route index element = {<HomePage />} />
                <Route path="my-car" element={<MyCar />} />
                <Route path="parking-complaints" element={<ParkingComplaints />} />
                <Route path="parking-allocations" element={<ParkingAllocations />} />
            </Route>
            
        </Routes>
    )
    
}

export default ParkingRoutes;