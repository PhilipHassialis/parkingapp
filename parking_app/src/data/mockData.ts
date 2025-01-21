export const mockNotifications = [
    {
        id: 1,
        title: "Notification 1",
        description: "This is a notification",
        date: "2021-09-01T00:00:00.000Z",
        type: "success",
    },
    {
        id: 2,
        title: "Another Notification",
        description: "This is another notification",
        date: "2021-09-01T00:00:00.000Z",
        type: "warning",
    },
    {
        id: 3,
        title: "Car notification failure",
        description: "Car notification failure",
        date: "2021-09-01T00:00:00.000Z",
        type: "error",
    },
    {
        id: 4,
        title: "Earlier Notification",
        description: "This is a notification",
        date: "2021-09-01T00:00:00.000Z",
        type: "success",
    },
    {
        id: 5,
        title: "Earliest Notification",
        description: "This is a notification",
        date: "2021-09-01T00:00:00.000Z",
        type: "info"
    },
] satisfies {
    id: number,
    title: string,
    description: string,
    date: string,
    type: "info" | "warning" | "error" | "success",
}[]