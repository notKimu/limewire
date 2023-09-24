import type { ChannelDTO } from "../../discord/dto";

export function sortChannelsByLastMessageId(channels: ChannelDTO[]) {
  return channels.sort(
    (channel1, channel2) =>
      Number(channel2.last_message_id) - Number(channel1.last_message_id)
  );
}
