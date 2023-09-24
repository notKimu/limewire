import { writable, type Writable } from "svelte/store";
import type { UserDTO } from "../discord/dto/user.dto";
import type { GuildDTO } from "../discord/dto";

interface UserData {
    user:   UserDTO;
    guilds: GuildDTO[];
}

export const userDataStore: Writable<UserData | null> = writable(null);