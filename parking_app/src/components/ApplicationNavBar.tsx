import ApplicationNavBarIcons from "./UI/ApplicationNavBarIcons";
import Logo from "./UI/Logo";

const ApplicationNavBar = () => {

    return (
        <nav className="application-navbar">
            <Logo />
            <div></div>
            <ApplicationNavBarIcons />
        </nav>
    )

}

export default ApplicationNavBar;