import type { DefaultReactionEmojiDTO, OverwriteDTO, ThreadMemberDTO, ThreadMetadataDTO, UserDTO } from ".";

export interface ChannelDTO {
    id:                                  string;
    type:                                number;
    guild_id?:                           string;
    position?:                           number;
    permission_overwrites?:              OverwriteDTO[];
    name?:                               string | null;
    last_message_id?:                    string | null;
    bitrate?:                            number;
    user_limit?:                         number;
    rate_limit_per_user?:                number;
    recipients?:                         UserDTO[];
    icon?:                               string | null;
    owner_id?:                           string | null;
    application_id?:                     string;
    managed?:                            boolean;
    parent_id?:                          string | null;
    last_pin_timestamp?:                 string | null;
    rtc_region?:                         string | null;
    video_quality_mode?:                 number;
    message_count?:                      number;
    member_count?:                       number;
    thread_metadata?:                    ThreadMetadataDTO;
    member?:                             ThreadMemberDTO;
    default_auto_archive_duration?:      number;
    permissions?:                        string;
    flags?:                              number;
    total_message_sent?:                 number;
    available_tags?:                     ForumTagDTO[];
    applied_tags?:                       string[];
    default_reaction_emoji?:             DefaultReactionEmojiDTO | null;
    default_thread_rate_limit_per_user?: number;
    default_sort_order?:                 number | null;
    default_forum_layout?:               number;
}

/*
    id	snowflake	the id of this channel
    type	integer	the type of channel
    guild_id?	snowflake	the id of the guild (may be missing for some channel objects received over gateway guild dispatches)
    position?	integer	sorting position of the channel
    permission_overwrites?	array of overwrite objects	explicit permission overwrites for members and roles
    name?	?string	the name of the channel (1-100 characters)
    topic?	?string	the channel topic (0-4096 characters for GUILD_FORUM and GUILD_MEDIA channels, 0-1024 characters for all others)
    nsfw?	boolean	whether the channel is nsfw
    last_message_id?	?snowflake	the id of the last message sent in this channel (or thread for GUILD_FORUM or GUILD_MEDIA channels) (may not point to an existing or valid message or thread)
    bitrate?	integer	the bitrate (in bits) of the voice channel
    user_limit?	integer	the user limit of the voice channel
    rate_limit_per_user?*	integer	amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
    recipients?	array of user objects	the recipients of the DM
    icon?	?string	icon hash of the group DM
    owner_id?	snowflake	id of the creator of the group DM or thread
    application_id?	snowflake	application id of the group DM creator if it is bot-created
    managed?	boolean	for group DM channels: whether the channel is managed by an application via the gdm.join OAuth2 scope
    parent_id?	?snowflake	for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
    last_pin_timestamp?	?ISO8601 timestamp	when the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.
    rtc_region?	?string	voice region id for the voice channel, automatic when set to null
    video_quality_mode?	integer	the camera video quality mode of the voice channel, 1 when not present
    message_count?**	integer	number of messages (not including the initial message or deleted messages) in a thread.
    member_count?	integer	an approximate count of users in a thread, stops counting at 50
    thread_metadata?	a thread metadata object	thread-specific fields not needed by other channels
    member?	a thread member object	thread member object for the current user, if they have joined the thread, only included on certain API endpoints
    default_auto_archive_duration?	integer	default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list after the specified period of inactivity, can be set to: 60, 1440, 4320, 10080
    permissions?	string	computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction. This does not include implicit permissions, which may need to be checked separately
    flags?	integer	channel flags combined as a bitfield
    total_message_sent?	integer	number of messages ever sent in a thread, it's similar to message_count on message creation, but will not decrement the number when a message is deleted
    available_tags?	array of tag objects	the set of tags that can be used in a GUILD_FORUM or a GUILD_MEDIA channel
    applied_tags?	array of snowflakes	the IDs of the set of tags that have been applied to a thread in a GUILD_FORUM or a GUILD_MEDIA channel
    default_reaction_emoji?	?default reaction object	the emoji to show in the add reaction button on a thread in a GUILD_FORUM or a GUILD_MEDIA channel
    default_thread_rate_limit_per_user?	integer	the initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
    default_sort_order?	?integer	the default sort order type used to order posts in GUILD_FORUM and GUILD_MEDIA channels. Defaults to null, which indicates a preferred sort order hasn't been set by a channel admin
    default_forum_layout?	integer	the default forum layout view used to display posts in GUILD_FORUM channels. Defaults to 0, which indicates a layout view has not been set by a channel admin
*/


interface ForumTagDTO {
    id:         string;
    name:       string;
    moderated:  boolean;
    emoji_id:   string | null;
    emoji_name: string | null;
}

/*
    id	snowflake	the id of the tag
    name	string	the name of the tag (0-20 characters)
    moderated	boolean	whether this tag can only be added to or removed from threads by a member with the MANAGE_THREADS permission
    emoji_id	?snowflake	the id of a guild's custom emoji *
    emoji_name	?string	the unicode character of the emoji *
*/