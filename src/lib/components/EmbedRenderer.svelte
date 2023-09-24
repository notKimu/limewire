<script lang="ts">
  import type { EmbedDTO } from "../discord/dto";
  import { discordMessageParse } from "../utils/discordMessageParser";
  export let embed: EmbedDTO;

  const {
    title,
    type,
    description,
    url,
    timestamp,
    color,
    footer,
    image,
    thumbnail,
    video,
    provider,
    author,
    fields,
  } = embed;

  const embedColor = color ? "#" + color.toString(16) : "var(--color-box-dark)";
  console.log(embedColor)
</script>

<article class="w-50 grid g-s">
    <div class="h-full br-m" style="background-color: {embedColor};" />

    <div class="box-dark flex col g-x br-m p-m">
        {#if author}
            <a href={author.url} class="h-x flex a-center g-m">
                {#if author.proxy_icon_url || author.icon_url}
                    <img class="h-full ar-1-1 round" src={author.proxy_icon_url || author.icon_url} alt="author icon url" />
                {/if}
                <s1>{author.name}</s1>
            </a>
        {/if}

        {#if title}
            {@html discordMessageParse(title)}
        {/if}

        {#if description}
            <div class="inline">
                {@html discordMessageParse(description)}
            </div>
        {/if}

        {#if image}
            <img class="w-full" src={image.url} alt="attachment" />
        {/if}

        {#if footer}
            <div class="flex a-center g-m">
                {#if footer.proxy_icon_url || footer.icon_url}
                    <img class="h-x ar-1-1" src={footer.proxy_icon_url || footer.icon_url} alt="footer icon url" />
                {/if}
                <s1>{footer.text}</s1>
            </div>
        {/if}
    </div>
</article>

<style>
    article {
        grid-template-columns: .5rem 1fr;
    }
</style>