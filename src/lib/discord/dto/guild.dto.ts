import type { EmojiDTO, RoleDTO, UserDTO } from ".";
import type { StickerDTO } from "./sticker.dto";

export interface GuildDTO {
    id:                             string;
    name:                           string;
    icon:                           string | null;
    icon_hash?:                     string | null;
    splash:                         string | null;
    discovery_splash:               string | null;
    owner?:                         boolean;
    owner_id:                       string;
    permissions?:                   string;
    region?:                        string | null;
    afk_channel_id:                 string | null;
    afk_timeout:                    number;
    widget_enabled?:                boolean;
    widget_channel_id?:             string | null;
    verification_level:             number;
    default_message_notifications:  number;
    explicit_content_filter:        number;
    roles:                          RoleDTO[];
    emojis:                         EmojiDTO[];
    features:                       string[];
    mfa_level:                      number;
    application_id:                 string | null;
    system_channel_id:              string | null;
    system_channel_flags:           number;
    rules_channel_id:               string | null;
    max_presences:                  number | null;
    max_members?:                   number;
    vanity_url_code:                string | null;
    description:                    string | null;
    banner:                         string | null;
    premium_tier:                   number;
    premium_subscription_count?:    number;
    preferred_locale:               string;
    public_updates_channel_id:      string | null;
    max_video_channel_users?:       number;
    max_stage_video_channel_users?: number;
    approximate_member_count?:      number;
    approximate_presence_count?:    number;
    welcome_screen?:                any;
    nsfw_level:                     number;
    stickers?:                      StickerDTO[];
    premium_progress_bar_enabled:   boolean;
    safety_alerts_channel_id:       string | null;
}

/*
    id	snowflake	guild id
    name	string	guild name (2-100 characters, excluding trailing and leading whitespace)
    icon	?string	icon hash
    icon_hash?	?string	icon hash, returned when in the template object
    splash	?string	splash hash
    discovery_splash	?string	discovery splash hash; only present for guilds with the "DISCOVERABLE" feature
    owner? *	boolean	true if the user is the owner of the guild
    owner_id	snowflake	id of owner
    permissions? *	string	total permissions for the user in the guild (excludes overwrites and implicit permissions)
    region? **	?string	voice region id for the guild (deprecated)
    afk_channel_id	?snowflake	id of afk channel
    afk_timeout	integer	afk timeout in seconds
    widget_enabled?	boolean	true if the server widget is enabled
    widget_channel_id?	?snowflake	the channel id that the widget will generate an invite to, or null if set to no invite
    verification_level	integer	verification level required for the guild
    default_message_notifications	integer	default message notifications level
    explicit_content_filter	integer	explicit content filter level
    roles	array of role objects	roles in the guild
    emojis	array of emoji objects	custom guild emojis
    features	array of guild feature strings	enabled guild features
    mfa_level	integer	required MFA level for the guild
    application_id	?snowflake	application id of the guild creator if it is bot-created
    system_channel_id	?snowflake	the id of the channel where guild notices such as welcome messages and boost events are posted
    system_channel_flags	integer	system channel flags
    rules_channel_id	?snowflake	the id of the channel where Community guilds can display rules and/or guidelines
    max_presences?	?integer	the maximum number of presences for the guild (null is always returned, apart from the largest of guilds)
    max_members?	integer	the maximum number of members for the guild
    vanity_url_code	?string	the vanity url code for the guild
    description	?string	the description of a guild
    banner	?string	banner hash
    premium_tier	integer	premium tier (Server Boost level)
    premium_subscription_count?	integer	the number of boosts this guild currently has
    preferred_locale	string	the preferred locale of a Community guild; used in server discovery and notices from Discord, and sent in interactions; defaults to "en-US"
    public_updates_channel_id	?snowflake	the id of the channel where admins and moderators of Community guilds receive notices from Discord
    max_video_channel_users?	integer	the maximum amount of users in a video channel
    max_stage_video_channel_users?	integer	the maximum amount of users in a stage video channel
    approximate_member_count?	integer	approximate number of members in this guild, returned from the GET /guilds/<id> and /users/@me/guilds endpoints when with_counts is true
    approximate_presence_count?	integer	approximate number of non-offline members in this guild, returned from the GET /guilds/<id> and /users/@me/guilds endpoints when with_counts is true
    welcome_screen?	welcome screen object	the welcome screen of a Community guild, shown to new members, returned in an Invite's guild object
    nsfw_level	integer	guild NSFW level
    stickers?	array of sticker objects	custom guild stickers
    premium_progress_bar_enabled	boolean	whether the guild has the boost progress bar enabled
    safety_alerts_channel_id	?snowflake	the id of the channel where admins and moderators of Community guilds receive safety alerts from Discord
*/


export interface GuildMemberDTO {
    user?:                         UserDTO;
    nick?:                         string | null;
    avatar?:                       string | null;
    roles:                         string[];
    joined_at:                     Date;
    premium_since?:                Date | null;
    deaf:                          boolean;
    mute:                          boolean;
    flags:                         number;
    pending?:                      boolean;
    permissions?:                  string
    communication_disabled_until?: Date | null;
}