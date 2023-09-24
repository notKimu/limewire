import { discordFetch } from ".";
import type { UserDTO } from "../dto";
import { endpoints } from "./defaults";

export async function getMe() {
    const user = await discordFetch(endpoints.me, "GET");
    if (!user) return null

    return user as UserDTO;
}