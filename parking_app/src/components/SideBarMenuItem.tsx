type SideBarMenuItemProps = {
    title: string;
}


const SideBarMenuItem = ({ title }: SideBarMenuItemProps) => {

    return (
        <div>
            {title}
        </div>
    )

}

export default SideBarMenuItem;