<script lang="ts">
    import type { ChannelDTO } from "../../discord/dto";
    import { channelStore, presencesStore } from "../../stores";
    import { getDiscordIcon } from "../../utils/icons";
    import { sortUserActivities } from "../../utils/users";
    import ProfileRenderer from "../ProfileRenderer.svelte";

    export let channel: ChannelDTO;
    $: userPresence = $presencesStore[channel.recipients[0].id];
</script>

<button class="unset channel selectable flex a-center g-m br-m p-m overflow-x-hidden" on:click={() => channelStore.set(channel)}>
    {#if channel.type !== 1}
        <img class="w-20 round" src={channel.icon ? getDiscordIcon("icons", channel.id, channel.icon, 96) : "/group.webp"} alt="group chat" />
        <p class="text-inline ellipsis">{channel.name || (channel.recipients.map(users => users.global_name || users.username).join(", "))}</p>
    {:else}
        <ProfileRenderer user={channel.recipients[0]} />
        <div class="flex col overflow-hidden">
            <p class="text-inline ellipsis">{channel.recipients[0].global_name || channel.recipients[0].username}</p>
            {#if userPresence && userPresence.activities && userPresence.activities.length > 0}
                <div class="flex a-center g-s">
                    {#if userPresence.activities[0].emoji}
                        <img class="h-x" src={getDiscordIcon("emojis", userPresence.activities[0].emoji.id)} alt="presence emoji" />
                    {/if}
                    <s2 class="text-inline ellipsis">{sortUserActivities(userPresence.activities)[0].state || sortUserActivities(userPresence.activities)[0].name}</s2>
                </div>
            {/if}
        </div>
    {/if}
</button>

<style>
    .channel {
        min-height: 3rem;
    }
</style>