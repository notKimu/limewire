import { writable, type Writable } from "svelte/store";

export const settingsState: Writable<boolean> = writable(false);