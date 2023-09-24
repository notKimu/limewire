export function getDiscordIcon(type: "avatars" | "icons" | "emojis", id: string, hash?: string, size?: 48 | 96 | 128 | 256 | 512 | 1024 | 2048) {
    return type === "emojis" ? 
    "https://cdn.discordapp.com/emojis/" + id :
    `https://cdn.discordapp.com/${type}/${id}/${hash}${size ? `?size=${size}` : ""}`
}