export const websocketEvents = {
    ready:          "READY",
    heartbeat:      10,
    messageReceive: "MESSAGE_CREATE",
    presenceUpdate: "PRESENCE_UPDATE",
    disconnect:     "DISCONNECT",
} as const;