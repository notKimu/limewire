import { socket } from ".";

export function webSocketHeartbeat(sequenceNumber: number) {
  socket.send(
    JSON.stringify({
      op: 1,
      d: sequenceNumber,
    })
  );
}

/*
    {
    "op": 10,
    "d": {
        "heartbeat_interval": 45000
    }
    }
*/
