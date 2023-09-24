import { writable, type Writable } from "svelte/store";
import type { ChannelDTO } from "../discord/dto";

export const privateChannelsStore: Writable<ChannelDTO[]> = writable(null)