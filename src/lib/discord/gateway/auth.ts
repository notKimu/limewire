import { socket } from ".";
import { authStore } from "../../stores";

let token = "";
authStore.subscribe((value) => token = value);

export function webSocketAuthorize() {
  socket.send(
    JSON.stringify({
      op: 2,
      d: {
        token: token,
        intents: 3276799,
        properties: {
          os: "linux",
          browser: "tauri",
          device: "tauri",
        },
      },
    })
  );
}
