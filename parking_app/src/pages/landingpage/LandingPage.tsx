import ApplicationCard from "../../components/UI/ApplicationCard";

const LandingPage = () => {

    return (
        <div>
            <h1>Landing Page</h1>
            <ApplicationCard title="Application" content="Go to the application" relativeUrl="/application" bgColour="lightgrey" />
        </div>
    );

}

export default LandingPage;