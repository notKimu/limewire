import type { UserDTO } from ".";

export interface EmojiDTO {
    id?:             string;
    name?:           string;
    roles?:          string[];
    user?:           UserDTO;
    require_colons?: boolean;
    managed?:        boolean;
    animated?:       boolean;
    available?:      boolean;
}
