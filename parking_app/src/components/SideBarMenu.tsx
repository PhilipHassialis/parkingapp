import { mockMenuItems } from "../data/mockData";
import SideBarMenuItem from "./SideBarMenuItem";
import UserHeroCard from "./UI/UserHeroCard";

const SideBarMenu = () => {

    return (<div>
        <UserHeroCard isLanding={false} user={{name: "The user name", role: "The user role", image:""}} />
        {mockMenuItems.map((item, index) => {
            return (<div key={index}>
                <SideBarMenuItem title={item.menuEntry} />
            </div>)
        })}
    </div>)
}

export default SideBarMenu;