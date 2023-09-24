import { writable, type Writable } from "svelte/store";
import type { ChannelDTO } from "../discord/dto/channel.dto";

export const channelStore: Writable<ChannelDTO> = writable(null);