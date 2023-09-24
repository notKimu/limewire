import type { UserDTO } from ".";

export interface StickerDTO {
    id:           string;
    pack_id?:     string;
    name:         string;
    description:  string | null;
    tags:         string;
    asset:        string | null;
    type:         number;
    format_type:  number;
    available?:   boolean;
    guild_id?:    string;
    user?:        UserDTO;
    sort_value?:  number;
}

/*
    d	snowflake	id of the sticker
    pack_id?	snowflake	for standard stickers, id of the pack the sticker is from
    name	string	name of the sticker
    description	?string	description of the sticker
    tags*	string	autocomplete/suggestion tags for the sticker (max 200 characters)
    asset?	string	Deprecated previously the sticker asset hash, now an empty string
    type	integer	type of sticker
    format_type	integer	type of sticker format
    available?	boolean	whether this guild sticker can be used, may be false due to loss of Server Boosts
    guild_id?	snowflake	id of the guild that owns this sticker
    user?	user object	the user that uploaded the guild sticker
    sort_value?	integer	the standard sticker's sort order within its pack
*/