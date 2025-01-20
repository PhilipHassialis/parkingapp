import SideBarMenuItem from "./SideBarMenuItem";
import UserHeroCard from "./UI/UserHeroCard";

const SideBarMenu = () => {

    return (<div>
        <UserHeroCard user={{name: "The user name", role: "The user role", image:""} } />
        <SideBarMenuItem title="Parking Allocation" />
        <SideBarMenuItem title="Cars" />
        <SideBarMenuItem title="Complaints" />
        <SideBarMenuItem title="Menu 04" />
        <SideBarMenuItem title="Menu 05" />
        <SideBarMenuItem title="Menu 06" />
        <SideBarMenuItem title="Menu 07" />
        <SideBarMenuItem title="Menu 08" />
        <SideBarMenuItem title="Menu 09" />
    </div>)
}

export default SideBarMenu;