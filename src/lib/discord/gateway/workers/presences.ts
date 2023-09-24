import { presencesStore } from "../../../stores";
import type { PresenceDTO, WebSocketEventDTO } from "../../dto";

export function updateUserPresence(event: WebSocketEventDTO) {
    const newPresence = event.d as PresenceDTO;
    console.log("Received presence update request:");
    console.log(newPresence)

    let presences: Record<string, PresenceDTO>;
    presencesStore.subscribe(values => presences = values);

    presences[newPresence.guild_id || '' + newPresence.user.id] = newPresence;
    presencesStore.set(presences);
}