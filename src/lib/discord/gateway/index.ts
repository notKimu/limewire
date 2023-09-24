import WebSocket from "tauri-plugin-websocket-api";
import type { WebSocketEventDTO } from "../dto";
import { webSocketSequence } from "../../stores/webSocketSequence.store";

export const socket = await WebSocket.connect(
  "wss://gateway.discord.gg/?v=10&encoding=json"
);

export const addWebSocketListener = (
  eventId:  string | number,
  callback: (event: WebSocketEventDTO) => void
) => {
  socket.addListener((msg) => {
    try {
      const event: WebSocketEventDTO = JSON.parse(msg.data.toString());
      webSocketSequence.set(event.s);
      
      if (event.t === eventId || event.op === eventId) {
        callback(JSON.parse(msg.data.toString()));
      }
    } catch (error) {
      console.error("Error parsing WebSocket message:", error);
    }
  });
};


/**DEBUG */
// socket.addListener((msg) => {
//     // console.log(msg);
//     console.log(JSON.parse(msg.data.toString()));
// });