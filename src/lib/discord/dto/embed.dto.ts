export interface EmbedDTO {
    title?:       string;
    type?:        string;
    description?: string;
    url?:         string;
    timestamp?:   string;
    color?:       number;
    footer?:      EmbedFooterDTO;
    image?:       EmbedImageDTO;
    thumbnail?:   EmbedImageDTO;
    video?:       Partial<EmbedImageDTO>;
    provider?:    { name? : string, url?: string };
    author?:      EmbedAuthorDTO;
    fields?:      EmbedFieldsDTO;
}

/*
    title?	string	title of embed
    type?	string	type of embed (always "rich" for webhook embeds)
    description?	string	description of embed
    url?	string	url of embed
    timestamp?	ISO8601 timestamp	timestamp of embed content
    color?	integer	color code of the embed
    footer?	embed footer object	footer information
    image?	embed image object	image information
    thumbnail?	embed thumbnail object	thumbnail information
    video?	embed video object	video information
    provider?	embed provider object	provider information
    author?	embed author object	author information
    fields?	array of embed field objects	fields information
*/

interface EmbedImageDTO {
    url:        string;
    proxy_url?: string;
    height?:    number;
    width?:     number;
}

/*
    url	string	source url of thumbnail (only supports http(s) and attachments)
    proxy_url?	string	a proxied url of the thumbnail
    height?	integer	height of thumbnail
    width?	integer	width of thumbnail
*/
// Thumbnail DTO is the exact same
// Video DTO just makes the url optional so Partial<> does the job

/*
    url?	string	source url of video
    proxy_url?	string	a proxied url of the video
    height?	integer	height of video
    width?	integer	width of video
*/


interface EmbedAuthorDTO {
    name:            string;
    url?:            string;
    icon_url?:       string;
    proxy_icon_url?: string;
}

/*
    name	string	name of author
    url?	string	url of author (only supports http(s))
    icon_url?	string	url of author icon (only supports http(s) and attachments)
    proxy_icon_url?	string	a proxied url of author icon
*/


interface EmbedFooterDTO {
    text:            string;
    icon_url?:       string;
    proxy_icon_url?: string;
}

/*
    text	string	footer text
    icon_url?	string	url of footer icon (only supports http(s) and attachments)
    proxy_icon_url?	string	a proxied url of footer icon
*/


interface EmbedFieldsDTO {
    name:    string;
    value:   string;
    inline?: boolean;
}

/*
    name	string	name of the field
    value	string	value of the field
    inline?	boolean	whether or not this field should display inline
*/