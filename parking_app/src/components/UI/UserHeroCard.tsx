import { User } from "./uicomponents-types";

const UserHeroCard = ({ user }: { user: User }) => {
    return (
        <div className="user-hero-card">
            <div className="user-hero-card-image">
                {user.image ?
                    (<img src={user.image} alt={user.name} />) : (
                        <img src="/user-circle.svg" width={150} height={150} alt={user.name} />
                    )}
            </div>
            <div className="user-hero-card-info">
                <h3 className="titleText">
                    {user.name}
                </h3>
                <h4 className="titleText">
                    {user.role}
                </h4>
            </div>
        </div>
    );
}

export default UserHeroCard;