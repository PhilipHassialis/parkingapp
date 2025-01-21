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

