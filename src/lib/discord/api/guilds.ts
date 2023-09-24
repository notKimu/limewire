import { discordFetch } from ".";
import type { GuildDTO } from "../dto";
import { endpoints } from "./defaults";
import { saveCache } from "../../utils/cache";

export async function getMyGuilds() {
    const guilds = await discordFetch(endpoints.me + endpoints.guilds, "GET") as GuildDTO[];
    if (!guilds) return null;

    return guilds;
}

export async function getGuild(id: string) {
    const guild = await discordFetch(endpoints.guild + id, "GET") as GuildDTO;
    if (!guild) return null;

    saveCache({ id: guild.id, type: "guild", object: guild });
    return guild;
}