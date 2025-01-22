import { Link } from "react-router"
import { ApplicationCardContent } from "../../types/uicomponents-types"

const ApplicationCard = ({ title, content, relativeUrl, bgColour }: ApplicationCardContent) => {
    return (
        <div className="application-card" style={{ backgroundColor: bgColour }}>
            <div className="application-card-content">
                <div>
                    <Link to={relativeUrl}><h2>{title}</h2></Link>
                </div>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default ApplicationCard;