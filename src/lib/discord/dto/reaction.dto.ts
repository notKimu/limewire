import type { EmojiDTO } from "./emoji.dto";

export interface ReactionDTO {
    count:         number;
    count_details: { burst: number, normal: number };
    me_burst:      boolean;
    emoji:         EmojiDTO;
    burst_colors:  number[];
}


export interface DefaultReactionEmojiDTO {
    emoji_id:   string | null;
    emoji_name: string | null;
}

/*
    emoji_id	?snowflake	the id of a guild's custom emoji
    emoji_name	?string	the unicode character of the emoji
*/