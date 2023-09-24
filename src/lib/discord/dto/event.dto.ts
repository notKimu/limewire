export interface WebSocketEventDTO {
    op:  number;
    d:   any;
    s?:  number;
    t?:  string;
}

/*
    op	integer	Gateway opcode, which indicates the payload type
    d	?mixed (any JSON value)	Event data
    s	?integer *	Sequence number of event used for resuming sessions and heartbeating
    t	?string *	Event name
*/