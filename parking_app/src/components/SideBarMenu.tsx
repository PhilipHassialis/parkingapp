import { mockMenuItems } from "../data/mockData";
import SideBarMenuItem from "./UI/SideBarMenuItem";
import UserHeroCard from "./UI/UserHeroCard";

const SideBarMenu = () => {

    return (<div>
        <UserHeroCard isLanding={false} user={{name: "The user name", role: "The user role", image:""}} />
        {mockMenuItems.map((item, index) => {
            return (<div key={index}>
                <SideBarMenuItem title={item.menuEntry} relativeUrl={item.relativeUrl} />
            </div>)
        })}
    </div>)
}

export default SideBarMenu;