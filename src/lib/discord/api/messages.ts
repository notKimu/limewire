import { discordFetch } from ".";
import { endpoints } from "./defaults";

export async function sendMessage(channelId: string, content: string) {
  const responseMessage = await discordFetch(
    endpoints.channel + channelId + endpoints.messages,
    "POST",
    {
      content,
    }
  );
  if (!responseMessage) return null;

  console.log(responseMessage);
  return responseMessage;
}
