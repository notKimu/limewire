export interface RoleDTO {
    id:            string;
    name:          string;
    color:         number;
    hoist:         boolean;
    icon:          string | null;
    unicode_emoji: string | null;
    position:      number;
    permissions:   string;
    managed:       boolean;
    mentionable:   boolean;
    tags:          { bot_id: string | null, integration_id: string | null, premium_subscriber: null, subscription_listing_id: string, available_for_purchase: null, guild_connections: null } | null;
    flags:         number;
}

/*
id	snowflake	role id
name	string	role name
color	integer	integer representation of hexadecimal color code
hoist	boolean	if this role is pinned in the user listing
icon?	?string	role icon hash
unicode_emoji?	?string	role unicode emoji
position	integer	position of this role
permissions	string	permission bit set
managed	boolean	whether this role is managed by an integration
mentionable	boolean	whether this role is mentionable
tags?	role tags object	the tags this role has
flags	integer	role flags combined as a bitfield
*/