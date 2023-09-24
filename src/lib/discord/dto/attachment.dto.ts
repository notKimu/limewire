export interface AttachmentDTO {
    id:            string;
    filename:      string;
    description:   string | null;
    content_type:  string | null;
    size:          number;
    url:           string;
    proxy_url:     string;
    height:        number | null;
    width:         number | null;
    ephemeral:     boolean | null;
    duration_secs: number | null;
    waveform:      string | null;
    flags:         number | null;
}

/*
id	snowflake	attachment id
filename	string	name of file attached
description?	string	description for the file (max 1024 characters)
content_type?	string	the attachment's media type
size	integer	size of file in bytes
url	string	source url of file
proxy_url	string	a proxied url of file
height?	?integer	height of file (if image)
width?	?integer	width of file (if image)
ephemeral? *	boolean	whether this attachment is ephemeral
duration_secs?	float	the duration of the audio file (currently for voice messages)
waveform?	string	base64 encoded bytearray representing a sampled waveform (currently for voice messages)
flags?	integer	attachment flags combined as a bitfield
*/