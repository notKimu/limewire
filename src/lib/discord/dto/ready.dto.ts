import type { ChannelDTO, GuildDTO, UserDTO } from "../../dto";
import type { ApplicationDTO } from "../../dto";

export interface ReadyDTO {
    v:                    number;
    user:                 UserDTO;
    guilds?:              GuildDTO[];
    session_id:           string;
    resume_gateway_url:   string;
    shard?:               [number, number];
    application?:         ApplicationDTO;
    presences?:           [];
    private_channels?:    ChannelDTO[];
}

/*
    v	integer	API version
    user	user object	Information about the user including email
    guilds	array of Unavailable Guild objects	Guilds the user is in
    session_id	string	Used for resuming connections
    resume_gateway_url	string	Gateway URL for resuming connections
    shard?	array of two integers (shard_id, num_shards)	Shard information associated with this session, if sent when identifying
    application	partial application object	Contains id and flags
*/