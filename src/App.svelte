<script lang="ts">
  import Login from "./lib/Login.svelte";
  import Servers from "./lib/Guilds.svelte";
  import SideBar from "./lib/SideBar.svelte";
  import Messages from "./lib/Messages.svelte";
  import { attachmentState, authStore, channelStore, guildListStore, presencesStore, settingsState, userDataStore } from "./lib/stores";
  import Settings from "./lib/Settings.svelte";
  import { webSocketAuthorize } from "./lib/discord/gateway/auth";
  import { addWebSocketListener } from "./lib/discord/gateway";
  import { websocketEvents } from "./lib/discord/gateway/events";
  import type { PresenceDTO, ReadyDTO, WebSocketEventDTO } from "./lib/discord/dto";
  import AttachmentViewer from "./lib/components/AttachmentViewer.svelte";
  import { privateChannelsStore } from "./lib/stores/privateChannels.store";
  import { sendWebSocketHeartbeat, updateUserPresence } from "./lib/discord/gateway/workers";

  async function getStartData(event: WebSocketEventDTO) {
    const data: ReadyDTO = event.d;

    userDataStore.set({ user: data.user, guilds: data.guilds });
    guildListStore.set(data.guilds);
    (<PresenceDTO[]>data.presences).forEach(
      presence => $presencesStore[presence.guild_id || '' + presence.user.id] = presence
    );
    privateChannelsStore.set(data.private_channels);
    console.log(data.presences);
  }

  authStore.subscribe((token) => {
    if (!token) return;

    webSocketAuthorize();
    addWebSocketListener(websocketEvents.heartbeat, sendWebSocketHeartbeat);
    addWebSocketListener(websocketEvents.ready, getStartData);
    addWebSocketListener(websocketEvents.presenceUpdate, updateUserPresence);
  });
</script>

<main>
    {#if $authStore && $userDataStore}
      <article class="screen g-m p-m">
        <Servers />
        <SideBar />
        <!-- STATES [this needs better implementation btw ;w;] -->
        {#if $channelStore}
          <Messages />
        {/if}

        {#if $settingsState}
          <Settings />
        {/if}

        {#if $attachmentState}
          <AttachmentViewer />
        {/if}
      </article>
    {:else}
      <Login />
    {/if}
</main>

<style>
  article {
    display:               grid;
    grid-template-columns: minmax(0, 5rem) minmax(0, 14rem) 1fr;
  }
</style>
