import { Link } from "react-router";
import { SideBarMenuItemProps } from "../../types/uicomponents-types";



const SideBarMenuItem = ({ title, relativeUrl }: SideBarMenuItemProps) => {

    return (
        <div className="sidebarmenuitem">
            <Link to={relativeUrl} className="linkText">
            {title}
            </Link>
        </div>
    )

}

export default SideBarMenuItem;