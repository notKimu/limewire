import { writable, type Writable } from "svelte/store";

export const webSocketSequence: Writable<number | null> = writable(null);