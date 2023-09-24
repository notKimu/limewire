import { webSocketSequence } from "../../../stores/webSocketSequence.store";
import type { WebSocketEventDTO } from "../../dto";
import { webSocketHeartbeat } from "../heartbeat";

export function sendWebSocketHeartbeat(event: WebSocketEventDTO) {
    // Wait before sending heartbeats to the gateway
    new Promise((resolve) =>
        setTimeout(resolve, event.d.heartbeat_interval * Math.random())
    );

    setInterval(() => {
        let webSocketSequenceNumber: number;
        webSocketSequence.subscribe(val => webSocketSequenceNumber = val);

        webSocketHeartbeat(webSocketSequenceNumber);
    }, event.d.heartbeat_interval);
  }