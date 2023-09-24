export interface OverwriteDTO {
    id:    string;
    type:  number;
    allow: string;
    deny:  string;
}

/*
    id	snowflake	role or user id
    type	int	either 0 (role) or 1 (member)
    allow	string	permission bit set
    deny	string	permission bit set
*/