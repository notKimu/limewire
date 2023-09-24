import { writable, type Writable } from "svelte/store";

export const authStore: Writable<string> = writable(null);