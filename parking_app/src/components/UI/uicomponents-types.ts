import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type User = {
    name: string;
    role: string;
    image: string;
}

export type ApplicationCardContent = {
    title: string;
    content: string;
    relativeUrl: string;
    bgColour: string;
}

export type PanelTitleProps = {
    title: string;
    icon: IconDefinition;
}

export type NotificationType = "info" | "warning" | "error" | "success";

export type NotificationProps = {
    title: string;
    type: NotificationType;
    date: string;
}

export type LandingCalendarItemProps = {
    date: Date;
    hasParkingEvent: boolean;
    onClickFn?: (parkingEventDate: Date) => void;
}

export type CalendarItemParkingInfoProps = {
    zone: string;
    position: string;
}
