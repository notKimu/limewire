import type { UserDTO } from ".";
import type { ActivityDTO } from "./activity.dto";

export interface PresenceDTO {
    user:          UserDTO;
    guild_id?:     string;
    status:        string;
    activities:    ActivityDTO[];
    client_status: { desktop?: string, mobile?: string, web?: string };

}

/*
    user	user object	User whose presence is being updated
    guild_id	snowflake	ID of the guild
    status	string	Either "idle", "dnd", "online", or "offline"
    activities	array of activity objects	User's current activities
    client_status	client_status object	User's platform-dependent status
*/