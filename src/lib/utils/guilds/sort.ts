import { channelType } from "../channels";
import type { ChannelDTO } from "../../discord/dto";

export function getRootGuildChannels(channels: ChannelDTO[]): ChannelDTO[] {
    return channels
        .filter(channel => channel.type === channelType.GUILD_CATEGORY || !channel.parent_id)
        .sort((channel1, channel2) => {
            if (channel1.type !== 4 && channel2.type === 4) {
                return -1; // channel1 comes before channel2
            } else if (channel1.type === 4 && channel2.type !== 4) {
                return 1; // channel2 comes before channel1
            }

            return channel1.position - channel2.position
        });
}