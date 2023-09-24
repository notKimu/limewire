<script lang="ts">
  import { attachmentState } from "../stores";
  import ProfileRenderer from "./ProfileRenderer.svelte";

  function closeAttachmentViewer(key: KeyboardEvent) {
    if (key.code === "Escape") {
        attachmentState.set(null);
    }
  }
</script>

<svelte:window on:keydown|preventDefault={closeAttachmentViewer} />

<main class="fullscreen-abs grid centerineitor blur-bg-s">
  <article class="relative h-full grid gap-x p-x">
    <p>{$attachmentState.attachment.filename}</p>

    <div class="w-full flex col a-center">
        <img
          class="attachment br-m"
          src={$attachmentState.attachment.proxy_url}
          alt={$attachmentState.attachment.filename}
        />
        <a class="external-link" href={$attachmentState.attachment.url}>
            <s1>View on browser</s1>
        </a>
    </div>

    <div class="flex g-m">
      <ProfileRenderer user={$attachmentState.author} showPresence={false} />
      <p>{$attachmentState.author.global_name}</p>
    </div>
  </article>

  <button on:click={() => attachmentState.set(null)}>
    <div class="fullscreen-abs background" />
  </button>
</main>

<style>
  article {
    animation:          popup .2s linear;
    grid-template-rows: 2rem 1fr 4rem;
    place-items:        center;
    z-index:            51;
  }
  
  .attachment {
    min-width: 10%;
    width:     auto;
    max-width: 75%;
  }

  .background {
    animation:        fadein .2s linear;
    background-color: rgba(0, 0, 0, 0.637);
    z-index:          50;
  }

  @keyframes popup {
    0% {
        opacity:   0;
        transform: scale(.3);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        opacity:   1;
        transform: scale(1);
    }
  }

  @keyframes fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }
</style>
