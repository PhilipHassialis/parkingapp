import { mockMenuItems } from "../data/mockData";
import SideBarMenuItem from "./SideBarMenuItem";
import UserHeroCard from "./UI/UserHeroCard";

const SideBarMenu = () => {

    return (<div>
        <UserHeroCard user={{name: "The user name", role: "The user role", image:""} } />
        {mockMenuItems.map((item, index) => {
            return (<div key={index}>
                <SideBarMenuItem title={item} />
            </div>)
        })}
    </div>)
}

export default SideBarMenu;