import { writable, type Writable } from "svelte/store";
import type { MessageDTO } from "../discord/dto";

export const messagesStore: Writable<MessageDTO[]> = writable(null);