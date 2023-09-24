import { fetch } from "@tauri-apps/api/http";
import { Body } from "@tauri-apps/api/http"
import { endpoints } from "./defaults"
import { authStore } from "../../stores";

export * from "./channels";
export * from "./guilds";
export * from "./messages";
export * from "./user";

let token = "";
authStore.subscribe((value) => token = value);

export async function discordFetch(url: string, method: "GET" | "POST", requestBody?: object): Promise<Object | null> {
    console.log(endpoints.mount + url)
    const response = await fetch(endpoints.mount + url, {
        method,
        headers: {
            "Authorization": token,
            "Content-Type":  "application/json",
        },
        body: requestBody ? Body.json(requestBody) as any : null,
    });

    return response.data;
}