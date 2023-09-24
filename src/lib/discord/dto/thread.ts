import type { GuildMemberDTO } from ".";

export interface ThreadMetadataDTO {
    archived:              boolean;
    auto_archive_duration: number;
    archive_timestamp:     string;
    locked:                boolean;
    invitable?:            boolean;
    create_timestamp?:     string | null;
}

/*
    archived	boolean	whether the thread is archived
    auto_archive_duration	integer	the thread will stop showing in the channel list after auto_archive_duration minutes of inactivity, can be set to: 60, 1440, 4320, 10080
    archive_timestamp	ISO8601 timestamp	timestamp when the thread's archive status was last changed, used for calculating recent activity
    locked	boolean	whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it
    invitable?	boolean	whether non-moderators can add other non-moderators to a thread; only available on private threads
    create_timestamp?	?ISO8601 timestamp	timestamp when the thread was created; only populated for threads created after 2022-01-09
*/


export interface ThreadMemberDTO {
    id?:            string;
    user_id?:       string;
    join_timestamp: string;
    flags:          number;
    member?:        GuildMemberDTO;
}

/*
    id? *	snowflake	ID of the thread
    user_id? *	snowflake	ID of the user
    join_timestamp	ISO8601 timestamp	Time the user last joined the thread
    flags	integer	Any user-thread settings, currently only used for notifications
    member? * **	guild member object	Additional information about the user
*/