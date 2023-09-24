import { cache } from ".";

interface CacheDTO {
    id:     string;
    type:   "guild" | "channel" | "channel[]" | "message[]";
    object: object;
}

export function saveCache(data: CacheDTO) {
    cache[data.type + ":" + data.id] = data.object;
}

export function getCache(id: string, type: "guild" | "channel" | "channel[]" | "message[]") {
    return cache[type + ":" + id] || null;
}