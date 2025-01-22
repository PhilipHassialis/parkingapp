// TODO: add a proper menu item list entry
export const mockMenuItems = [
    {
        menuEntry: "Parking Allocations",
        relativeUrl: "/parking-allocations",
    },
    {
        menuEntry: "My Car",
        relativeUrl: "/my-car",
    },
    {
        menuEntry: "Parking Complaints",
        relativeUrl: "/parking-complaints",
    },
    {
        menuEntry: "Menu 04",
        relativeUrl: "/menu04",
    },
    {
        menuEntry: "Menu 05",
        relativeUrl: "/menu05",
    },
    {
        menuEntry: "Menu 06",
        relativeUrl: "/menu06",
    },
    {
        menuEntry: "Menu 07",
        relativeUrl: "/menu07",
    },
    {
        menuEntry: "Menu 08",
        relativeUrl: "/menu08",
    },
    {
        menuEntry: "Menu 09",
        relativeUrl: "/menu09",
    }
]

// TODO: fetch actual notifications from the backend
export const mockNotifications = [
    {
        id: 1,
        title: "Notification 1",
        description: "This is a notification",
        date: "2025-01-21",
        type: "success",
    },
    {
        id: 2,
        title: "Another Notification",
        description: "This is another notification",
        date: "2025-01-21",
        type: "warning",
    },
    {
        id: 3,
        title: "Car notification failure",
        description: "Car notification failure",
        date: "2025-01-21",
        type: "error",
    },
    {
        id: 4,
        title: "Earlier Notification",
        description: "This is a notification",
        date: "2021-01-20",
        type: "success",
    },
    {
        id: 5,
        title: "Earliest Notification",
        description: "This is a notification",
        date: "2021-01-19",
        type: "info"
    },
] satisfies {
    id: number,
    title: string,
    description: string,
    date: string,
    type: "info" | "warning" | "error" | "success",
}[]

export const mockParkingEvent =(date: Date) => date.getDate() % 2 === 0 ? {zone: "A", position: `${date.getDate()%11+1}`} : undefined;
