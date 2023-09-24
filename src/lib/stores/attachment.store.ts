import { writable, type Writable } from "svelte/store";
import type { AttachmentDTO, UserDTO } from "../discord/dto";

interface UserAttachmentDTO {
    author:     UserDTO;
    attachment: AttachmentDTO;
}

export const attachmentState: Writable<UserAttachmentDTO | null> = writable(null);