<script lang="ts">
  import { channelStore, guildStore, guildListStore, messagesStore } from "./stores";
  import { getDiscordIcon } from "./utils/icons";
</script>

<nav class="box-dark flex col g-m br-m p-x overflow-hidden">
  <button on:click={() => { guildStore.set(null); channelStore.set(null) }}>
    <img class="w-full round-hover" src="/public/svg/limewire.svg" alt="limewire logo" />
  </button>

  {#each $guildListStore as guild}
    <button on:click={() => {channelStore.set(null); guildStore.set(guild.id)}}>
      <img class="w-full round-hover" src={getDiscordIcon("icons", guild.id, guild.icon, 96)} alt={guild.name + "'s icon"} />
    </button>
  {/each}
</nav>

<style>
  nav {
    height: 100%;
  }
</style>