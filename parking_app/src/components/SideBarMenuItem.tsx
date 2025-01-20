type SideBarMenuItemProps = {
    title: string;
}


const SideBarMenuItem = ({ title }: SideBarMenuItemProps) => {

    return (
        <div className="sidebarmenuitem">
            {title}
        </div>
    )

}

export default SideBarMenuItem;