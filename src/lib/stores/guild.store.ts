import { type Writable, writable } from "svelte/store";

export const guildStore: Writable<string> = writable(null);
