// TODO: add a proper menu item list entry
export const mockMenuItems = [
    "Parking Allocations",
    "Cars",
    "Complaints",
    "Menu 04",
    "Menu 05",
    "Menu 06",
    "Menu 07",
    "Menu 08",
    "Menu 09"
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