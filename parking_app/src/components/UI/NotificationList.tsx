import { NotificationProps } from "../../types/uicomponents-types";
import Notification from "./Notification";
import { groupBy } from "lodash";


const NotificationList = ({ notifications }: { notifications: NotificationProps[] }) => {

    const sortedNotifications = notifications.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
    })

    const groupedNotifications = groupBy(sortedNotifications, (notification) => notification.date);

    return (<div>

        {Object.keys(groupedNotifications).map((dateKey, index) => (
            <div key={index} className="notification-date-title">
                <h2>{dateKey}</h2>
                {groupedNotifications[dateKey].map((notification, index) => (<div key={index}>
                    <Notification title={notification.title}
                        type={notification.type}
                        date={notification.date}
                        key={index} />
                </div>))}
            </div>))}


    </div>)
}

export default NotificationList;