<script lang="ts">
    import type { UserDTO } from "../discord/dto";
    import type { PresenceDTO } from "../discord/dto";
    import { presencesStore } from "../stores";
    import { getDiscordIcon } from "../utils/icons";

    export let user: UserDTO;
    export let profilePictureSize: "square-xl" | "square-xxl" = "square-xxl";
    export let showPresence = true;
    
    const presence: PresenceDTO = $presencesStore[user.id];
</script>

<button class="profile-picture relative flex a-start">
    <img class="{profilePictureSize} round" src={getDiscordIcon("avatars", user.id, user.avatar, 128)} alt="{user.username}'s message" />
    {#if showPresence}
        <div class="absolute w-25 ar-1-1 right-0 bottom-0 round {presence ? presence.status : 'offline'}" />
    {/if}
</button>

<style>
    .profile-picture:hover img {
        border: .2rem solid var(--color-select);
    }
</style>