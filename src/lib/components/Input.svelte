<script lang="ts">
    import { sendMessage } from "../discord/api/messages";

    export let placeholder: string;
    export let channelId:   string;

    let text = "";
    let inputDisabled = false;

    const sendMessageInput = async() => {
        if (text === "" || /^[\s]*$/.test(text)) return;

        inputDisabled = true;
        await sendMessage(channelId, text);
        text = "";
        inputDisabled = false;
    }
</script>

<div class="h-full w-full flex a-center j-space g-m">
    {#if !inputDisabled}
        <button class="unset square-xl">
            <svg class="h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H16M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--color-text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    {/if}

    <textarea
        bind:value={text}
        class="w-full p-m"
        disabled={inputDisabled}
        on:keypress={async(key) => {
            if (key.code === "Enter") {
                await sendMessageInput()
            }
        }}
        placeholder={inputDisabled ? "You can't send messages here" : placeholder}
        rows="1"
    />
    
    {#if !inputDisabled}
        <button class="square-xl">
            <svg class="h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4 13.8C8.4 13.8 9.75 15.6 12 15.6C14.25 15.6 15.6 13.8 15.6 13.8M14.7 9.3H14.709M9.3 9.3H9.309M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15.15 9.3C15.15 9.54853 14.9485 9.75 14.7 9.75C14.4515 9.75 14.25 9.54853 14.25 9.3C14.25 9.05147 14.4515 8.85 14.7 8.85C14.9485 8.85 15.15 9.05147 15.15 9.3ZM9.75 9.3C9.75 9.54853 9.54853 9.75 9.3 9.75C9.05147 9.75 8.85 9.54853 8.85 9.3C8.85 9.05147 9.05147 8.85 9.3 8.85C9.54853 8.85 9.75 9.05147 9.75 9.3Z" stroke="var(--color-text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>

        <button 
            class="square-xl"
            on:click={async() => await sendMessageInput()}
        >
            <svg class="h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="var(--color-text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    {/if}
</div>

<style>
    textarea {
        height: fit-content;
    }
</style>