export interface WelcomeScreenDTO {
    description: string | null;
    welcome_channels: WelcomeScreenChannelDTO[]
}

/*
    description	?string	the server description shown in the welcome screen
    welcome_channels	array of welcome screen channel objects	the channels shown in the welcome screen, up to 5
*/


export interface WelcomeScreenChannelDTO {
    channel_id:  string;
    description: string;
    emoji_id:    string | null;
    emoji_name:  string | null;
}

/*
    channel_id	snowflake	the channel's id
    description	string	the description shown for the channel
    emoji_id	?snowflake	the emoji id, if the emoji is custom
    emoji_name	?string	the emoji name if custom, the unicode character if standard, or null if no emoji is set
*/