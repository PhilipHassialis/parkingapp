import { mockMenuItems } from "../data/mockData";
import useUserStore from "../data/userData";
import SideBarMenuItem from "./UI/SideBarMenuItem";
import UserHeroCard from "./UI/UserHeroCard";

const SideBarMenu = () => {

    const userStore = useUserStore ();
    const userName = userStore.user?.name ?? "";
    const userEmail = userStore.user?.email ?? "";

    return (<div>
        <UserHeroCard isLanding={false} user={{name: userName, role: "The user role", image:"", email:userEmail}} />
        {mockMenuItems.map((item, index) => {
            return (<div key={index}>
                <SideBarMenuItem title={item.menuEntry} relativeUrl={item.relativeUrl} />
            </div>)
        })}
    </div>)
}

export default SideBarMenu;