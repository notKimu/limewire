<script lang="ts">
    import type { ChannelDTO } from "../../discord/dto";
    import { channelStore } from "../../stores";
    import { channelIcon } from "../../utils/channels";

    export let channel: ChannelDTO;
</script>

<button 
    class="channel selectable flex a-center g-m br-m p-m overflow-x-hidden {$channelStore && $channelStore.id === channel.id ? 'selected' : ''}"
    on:click={() => {channelStore.set(channel)}}
>
    {@html channelIcon[channel.type]}
    <p class="text-inline ellipsis">{channel.name}</p>
</button>

<style>
    .channel {
        min-height: 1.5rem;
    }
</style>