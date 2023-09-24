import { writable, type Writable } from "svelte/store";
import type { PresenceDTO } from "../discord/dto/presence.dto";

export const presencesStore: Writable<Record<string, PresenceDTO> | null> = writable({});