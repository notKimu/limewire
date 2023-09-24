<script lang="ts">
    import type { MessageDTO } from "../discord/dto";
    import { formatTimestamp } from "../utils/dates";
    import { discordMessageParse } from "../utils/discordMessageParser";
    import AttachmentRenderer from "./AttachmentRenderer.svelte";
    import EmbedRenderer from "./EmbedRenderer.svelte";
    import ProfileRenderer from "./ProfileRenderer.svelte";

    export let message: MessageDTO;
</script>

<article class="flex col g-s">
    {#if message.type === 20}
        <s2>/{message.interaction.name}</s2>
    {/if}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="message relative flex g-m br-m p-m popup"
    >
        <ProfileRenderer user={message.author} showPresence={false} />

        <div class="flex col">
            <div class="flex a-center g-m">
                <p><b>{message.author.global_name || message.author.username}</b></p>
                <s2>{formatTimestamp(message.timestamp)}</s2>
            </div>

            {#if message.content}
                <div class="inline">
                    <p class="inline">
                        {@html discordMessageParse(message.content)}
                    </p>
                </div>
            {/if}
                
            {#if message.attachments.length > 0}
                {#each message.attachments as attachment}
                    <AttachmentRenderer author={message.author} attachment={attachment} />
                {/each}
            {/if}

            {#if message.embeds.length > 0}
                {#each message.embeds as embed}
                    <EmbedRenderer embed={embed} />
                {/each}
            {/if}
        </div>

        <div class="message-options absolute top-0 right-0">
            {#await import("./messages/MessageOptions.svelte") then MessageOptions}
                <svelte:component this={MessageOptions.default}/>
            {/await}
        </div>
    </div>
</article>

<style>
    .message:hover {
        background-color: var(--color-box-dark);
    }

    .message-options {
        display:      none;
        margin-right: .5rem;
    }
    .message:hover .message-options {
        display: flex;
    }

    .popup {
        position: relative;
        animation: popup .2s ease;
    }

    @keyframes popup {
        0% {
            opacity: 0;
            top:     1rem;
        }
        100% {
            opacity: 1;
            top:     0;
        }
    }
</style>