import type { EmojiDTO } from ".";

export interface ActivityDTO {
    name:            string;
    type:            0 | 1 | 2 | 3 | 4 | 5;
    url?:            string | null;
    created_at:      number;
    timestamps?:     ActivityTimestampsDTO;
    application_id?: string;
    details?:        string | null;
    state?:          string | null;
    emoji?:          EmojiDTO | null;
    party?:          ActivityPartyDTO;
    assets?:         ActivityAssetsDTO;
    secrets?:        ActivitySecretsDTO;
    instance?:       boolean;
    flags?:          number;
    buttons?:        ActivityButtonsDTO[];
}

/*
    name	string	Activity's name
    type	integer	Activity type
    url?	?string	Stream URL, is validated when type is 1
    created_at	integer	Unix timestamp (in milliseconds) of when the activity was added to the user's session
    timestamps?	timestamps object	Unix timestamps for start and/or end of the game
    application_id?	snowflake	Application ID for the game
    details?	?string	What the player is currently doing
    state?	?string	User's current party status, or text used for a custom status
    emoji?	?emoji object	Emoji used for a custom status
    party?	party object	Information for the current party of the player
    assets?	assets object	Images for the presence and their hover texts
    secrets?	secrets object	Secrets for Rich Presence joining and spectating
    instance?	boolean	Whether or not the activity is an instanced game session
    flags?	integer	Activity flags ORd together, describes what the payload includes
    buttons?	array of buttons	Custom buttons shown in the Rich Presence (max 2)
*/


export interface ActivityAssetsDTO {
    large_image?: string;
    large_text?:  string;
    small_image?: string;
    small_text?:  string;
}

/*
    large_image?	string	See Activity Asset Image
    large_text?	string	Text displayed when hovering over the large image of the activity
    small_image?	string	See Activity Asset Image
    small_text?	string	Text displayed when hovering over the small image of the activity
*/


export interface ActivityButtonsDTO {
    label: string;
    url:   string;
}

/*
    label	string	Text shown on the button (1-32 characters)
    url	string	URL opened when clicking the button (1-512 characters)
*/


export interface ActivityPartyDTO {
    id?:   string;
    size?: [current_size: number, max_size: number];
}

/*
    id?	string	ID of the party
    size?	array of two integers (current_size, max_size)	Used to show the party's current and maximum size
*/


export interface ActivitySecretsDTO {
    join?:     string;
    spectate?: string;
    match?:    string;
}

/*
    join?	string	Secret for joining a party
    spectate?	string	Secret for spectating a game
    match?	string	Secret for a specific instanced match
*/


export interface ActivityTimestampsDTO {
    start?: number;
    end?:   number;
}

/*
    start?	integer	Unix time (in milliseconds) of when the activity started
    end?	integer	Unix time (in milliseconds) of when the activity ends
*/