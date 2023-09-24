import type { ChannelDTO, GuildMemberDTO, MessageDTO, UserDTO } from ".";

export interface InteractionDTO {
    id:               string;
    application_id:   string;
    type:             1 | 2 | 3 | 4 | 5;
    data?:            InteractionDataDTO;
    guild_id?:        string;
    channel?:         Partial<ChannelDTO>;
    channel_id?:      string;
    member?:          GuildMemberDTO;
    user?:            UserDTO;
    token:            string;
    version:          number;
    message?:         MessageDTO;
    app_permissions?: string;
    locale?:          string;
    guild_locale?:    string;
}

/*
    id	snowflake	ID of the interaction
    application_id	snowflake	ID of the application this interaction is for
    type	interaction type	Type of interaction
    data?*	interaction data	Interaction data payload
    guild_id?	snowflake	Guild that the interaction was sent from
    channel?	partial channel object	Channel that the interaction was sent from
    channel_id?	snowflake	Channel that the interaction was sent from
    member?**	guild member object	Guild member data for the invoking user, including permissions
    user?	user object	User object for the invoking user, if invoked in a DM
    token	string	Continuation token for responding to the interaction
    version	integer	Read-only property, always 1
    message?	message object	For components, the message they were attached to
    app_permissions?	string	Bitwise set of permissions the app or bot has within the channel the interaction was sent from
    locale?***	string	Selected language of the invoking user
    guild_locale?	string	Guild's preferred locale, if invoked in a guild
*/


export interface InteractionDataDTO {
    id:         string;
    name:       string;
    type:       number;
    resolved?:  InteractionResolvedDataDTO;
    options?:   InteractionApplicationCommandInteractionDataOptionStructure[];
    guild_id?:  string;
    target_id?: string;
}

/*
    id	snowflake	the ID of the invoked command
    name	string	the name of the invoked command
    type	integer	the type of the invoked command
    resolved?	resolved data	converted users + roles + channels + attachments
    options?*	array of application command interaction data option	the params + values from the user
    guild_id?	snowflake	the id of the guild the command is registered to
    target_id?	snowflake	id of the user or message targeted by a user or message command
*/


export interface InteractionResolvedDataDTO {
    users?:       string[];
    members?:     string[];
    roles?:       string[];
    channels?:    string[];
    messages?:    string[];
    attachments?: string[];
}

/*
    users?	Map of Snowflakes to user objects	the ids and User objects
    members?*	Map of Snowflakes to partial member objects	the ids and partial Member objects
    roles?	Map of Snowflakes to role objects	the ids and Role objects
    channels?**	Map of Snowflakes to partial channel objects	the ids and partial Channel objects
    messages?	Map of Snowflakes to partial messages objects	the ids and partial Message objects
    attachments?	Map of Snowflakes to attachment objects	the ids and attachment objects
*/


// Funky name discord!
export interface InteractionApplicationCommandInteractionDataOptionStructure {
    name:     string;
    type:     number;
    value?:   string | number | boolean;
    options?: InteractionApplicationCommandInteractionDataOptionStructure[];
    focused?: boolean;
}

/*
    name	string	Name of the parameter
    type	integer	Value of application command option type
    value?	string, integer, double, or boolean	Value of the option resulting from user input
    options?	array of application command interaction data option	Present if this option is a group or subcommand
    focused?	boolean	true if this option is the currently focused option for autocomplete
*/