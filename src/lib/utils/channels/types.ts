export const channelType = {
    GUILD_TEXT:          0,
    DM:                  1,
    GUILD_VOICE:         2,
    GROUP_DM:            3,
    GUILD_CATEGORY:      4,
    GUILD_ANNOUNCEMENT:  5,
    ANNOUNCEMENT_THREAD: 10,
    PUBLIC_THREAD:       11,
    PRIVATE_THREAD:      12,
    GUILD_STAGE_VOICE:   13,
    GUILD_DIRECTORY:     14,
    GUILD_FORUM:         15,
    GUILD_MEDIA:         16
} as const;

/*
    GUILD_TEXT	0	a text channel within a server
    DM	1	a direct message between users
    GUILD_VOICE	2	a voice channel within a server
    GROUP_DM	3	a direct message between multiple users
    GUILD_CATEGORY	4	an organizational category that contains up to 50 channels
    GUILD_ANNOUNCEMENT	5	a channel that users can follow and crosspost into their own server (formerly news channels)
    ANNOUNCEMENT_THREAD	10	a temporary sub-channel within a GUILD_ANNOUNCEMENT channel
    PUBLIC_THREAD	11	a temporary sub-channel within a GUILD_TEXT or GUILD_FORUM channel
    PRIVATE_THREAD	12	a temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission
    GUILD_STAGE_VOICE	13	a voice channel for hosting events with an audience
    GUILD_DIRECTORY	14	the channel in a hub containing the listed servers
    GUILD_FORUM	15	Channel that can only contain threads
    GUILD_MEDIA	16	Channel that can only contain threads, similar to GUILD_FORUM channels
*/