<script lang="ts">
    import { afterUpdate, onMount } from "svelte";
    import Input from "./components/Input.svelte";
    import MessageRenderer from "./components/MessageRenderer.svelte";
    import { channelStore, messagesStore } from "./stores";
    import { websocketEvents } from "./discord/gateway/events";
    import { addWebSocketListener } from "./discord/gateway";
    import type { MessageDTO } from "./discord/dto";
    import type { WebSocketEventDTO } from "./discord/dto";
    import ProfileRenderer from "./components/ProfileRenderer.svelte";
    import { channelIcon, channelType } from "./utils/channels";
    import { getCache, saveCache } from "./utils/cache";
    import { getChannelMessages } from "./discord/api";
    import Loading from "./components/status/Loading.svelte";

    const scrollToBottom = () => {
        let messagesContainer = document.getElementById('messages-container');
        if (!messagesContainer) return;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    channelStore.subscribe(async(channel) => {
        messagesStore.set(null);
        if (!channel) return;
 
        let messageCache = getCache(channel.id, "message[]") as MessageDTO[];
        messageCache ? messagesStore.set(messageCache) : null;

        messagesStore.set(await getChannelMessages(channel.id));
        scrollToBottom();
    });

    function handleMessageCreate(event: WebSocketEventDTO) {
        console.log(event)
        if ((<MessageDTO>event.d).channel_id !== $channelStore.id) return;
        
        $messagesStore = [event.d ,...$messagesStore];
        saveCache({ id: $channelStore.id, type: "message[]", object: $messagesStore });
    };

    onMount(async() => {
        addWebSocketListener(websocketEvents.messageReceive, handleMessageCreate)
    });

    afterUpdate(() => {
        scrollToBottom();
    });
</script>

<article class="grid g-m br-m overflow-hidden">
    <div class="box-dark flex a-center g-m br-m p-x">
        {#if $channelStore.type === channelType.DM}
            <ProfileRenderer user={$channelStore.recipients[0]} profilePictureSize={"square-xl"} />
        {:else}
            {@html channelIcon[$channelStore.type]}
        {/if}
        <p>{$channelStore.name || $channelStore.recipients[0].global_name || $channelStore.recipients[0].username}</p>
    </div>

    <div id="messages-container" class="br-m overflow-y-scroll">
        {#if !$messagesStore}
                <Loading text={"Loading messages..."} />
            {:else if $messagesStore.length  === 0}
                <h2>There are no messages here! :c</h2>
            {:else}
                <div class="flex col-reverse j-end g-s overflow-y-scroll">
                    {#each $messagesStore as message}
                        {#if message}
                            <MessageRenderer message={message} />
                        {/if}
                    {/each}
                </div>
        {/if}
    </div>

    <div class="box-dark flex a-center br-m p-x">
        <Input channelId={$channelStore.id} placeholder="Send message to {$channelStore.name || $channelStore.recipients[0].global_name || $channelStore.recipients[0].username}" />
    </div>
</article>

<style class="outline-dbg">
    article {
        grid-template-rows: 3rem 1fr 4rem;
    }
</style>