import { writable, type Writable } from "svelte/store";
import type { GuildDTO } from "../discord/dto";

export const guildListStore: Writable<GuildDTO[]> = writable(null);