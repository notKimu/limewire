import { discordFetch } from ".";
import type { MessageDTO } from "../dto";
import type { ChannelDTO } from "../dto/channel.dto";
import { endpoints } from "./defaults";
import { saveCache } from "../../utils/cache";

export async function getMyChannels() {
    const channels = await discordFetch(endpoints.me + endpoints.channels, "GET");
    if (!channels) return null

    return (<ChannelDTO[]>channels).sort((a, b) => {
        const posA = a.position || parseInt(a.last_message_id);
        const posB = b.position || parseInt(b.last_message_id);
      
        return posB - posA;
    });
}

export async function getChannelMessages(id: string) {
    const messages = await discordFetch(endpoints.channel + id + endpoints.messages, "GET") as MessageDTO[];
    if (!messages) return null;

    saveCache({ id, type: "message[]", object: messages });
    return messages;
}

export async function getGuildChannels(guildId: string) {
    const channels = await discordFetch(endpoints.guild + guildId + endpoints.channels, "GET") as ChannelDTO[];
    if (!channels) return null;

    saveCache({ id: guildId, type: "channel[]", object: channels });
    return channels;
}