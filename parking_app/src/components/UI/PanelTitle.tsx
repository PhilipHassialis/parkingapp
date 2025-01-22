import { PanelTitleProps } from "../../types/uicomponents-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PanelTitle = ({icon, title}: PanelTitleProps) => {
    return (
        <div className="panel-title">
            <FontAwesomeIcon icon={icon} />
            {" "}
            {title}
        </div>
    );
}

export default PanelTitle;