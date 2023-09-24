import type { GuildDTO, UserDTO } from ".";

export interface ApplicationDTO {
    id:                                 string; // snowflake
    name:                               string;
    icon?:                              string | null; // icon hash or null
    description:                        string;
    rpc_origins?:                       string[] | null; // array of rpc origin urls or null
    bot_public:                         boolean;
    bot_require_code_grant:             boolean;
    terms_of_service_url?:              string | null; // URL or null
    privacy_policy_url?:                string | null; // URL or null
    owner?:                             Partial<UserDTO> | null; // partial user object or null
    summary:                            string; // deprecated, to be removed in v11
    verify_key:                         string; // hex encoded key for verification
    team?:                              TeamDTO | null; // team object or null
    guild_id?:                          string | null; // snowflake or null
    guild?:                             Partial<GuildDTO> | null; // partial guild object or null
    primary_sku_id?:                    string | null; // snowflake or null
    slug?:                              string | null; // URL slug or null
    cover_image?:                       string | null; // default rich presence invite cover image hash or null
    flags?:                             number; // public flags
    approximate_guild_count?:           number | null; // approximate count of app's guild membership or null
    tags?:                              string[] | null; // array of up to 5 tags
    install_params?:                    InstallParamsDTO | null; // install params object or null
    custom_install_url?:                string | null; // default custom authorization link or null
    role_connections_verification_url?: string | null; // role connection verification entry point or null
}

interface TeamDTO {
    // Define properties of the team object here
}

interface InstallParamsDTO {
    // Define properties of the install params object here
}
/*
id	snowflake	the id of the app
name	string	the name of the app
icon	?string	the icon hash of the app
description	string	the description of the app
rpc_origins?	array of strings	an array of rpc origin urls, if rpc is enabled
bot_public	boolean	when false only app owner can join the app's bot to guilds
bot_require_code_grant	boolean	when true the app's bot will only join upon completion of the full oauth2 code grant flow
terms_of_service_url?	string	the url of the app's terms of service
privacy_policy_url?	string	the url of the app's privacy policy
owner?	partial user object	partial user object containing info on the owner of the application
summary (deprecated)	string	deprecated and will be removed in v11. An empty string.
verify_key	string	the hex encoded key for verification in interactions and the GameSDK's GetTicket
team	?team object	if the application belongs to a team, this will be a list of the members of that team
guild_id?	snowflake	guild associated with the app. For example, a developer support server.
guild?	partial guild object	a partial object of the associated guild
primary_sku_id?	snowflake	if this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists
slug?	string	if this application is a game sold on Discord, this field will be the URL slug that links to the store page
cover_image?	string	the application's default rich presence invite cover image hash
flags?	integer	the application's public flags
approximate_guild_count?	integer	an approximate count of the app's guild membership.
tags?	array of strings	up to 5 tags describing the content and functionality of the application
install_params?	install params object	settings for the application's default in-app authorization link, if enabled
custom_install_url?	string	the application's default custom authorization link, if enabled
role_connections_verification_url?	string	the application's role connection verification entry point, which when configured will render the app as a verification method in the guild role verification configuration
*/