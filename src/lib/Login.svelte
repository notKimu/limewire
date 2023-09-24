<script lang="ts">
    import { authStore } from "./stores";

    let token: string;

    async function verifyToken() {
        const response = await fetch("https://discord.com/api/users/@me", {
            method: "GET",
            headers: {
                "Authorization": token,
            }
        });

        return response.ok;
    }
</script>

<main class="box-dark fullscreen-abs grid centerineitor p-x">
    <div class="login flex col g-x">
        <div class="logo">
            <svg class="w-full" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 257">
                <path fill="var(--color-text)" d="m82.1 257h-82.1v-256.6h82.1zm102.7 0h-82.2v-184.8h82.2zm0-205.3h-82.2v-51.3h82.2zm102.6 205.3h-82.1v-184.8h246.3l41.1 41.1v143.7h-82.1v-102.6h-20.5v102.6h-82.2v-102.6h-20.5zm307.9-113h20.6v-10.2h-20.6zm102.7 112.9h-143.7l-41.1-41.1v-102.6l41.1-41.1h102.6l41.1 41.1v71.8h-102.7v10.3h102.7zm307.9 0h-246.3l-41.1-41.1v-143.7h82.1v102.7h20.6v-102.7h82.1v102.7h20.5v-102.7h82.1zm102.7 0h-82.1v-184.7h82.1zm0-205.3h-82.1v-51.3h82.1zm102.6 205.3h-82.1v-143.8l41.1-41h123.1v82.1h-82.1zm184.8-112.9h20.5v-10.3h-20.5zm102.6 112.9h-143.7l-41-41v-102.7l41-41h102.7l41 41v71.9h-102.6v10.3h102.6z"/>
            </svg>
        </div>

        <div>
            <p class="console-text">Welcome to limewire, please input yout credentials:</p>
            <div class="flex a-center g-m">
                <p class="console-text">[guest@limewire]$ </p>
                <input
                    bind:value={token}
                    class="unset token-input console-text"
                    on:keypress={async(event) => {
                        console.log(event)
                        if (event.key !== "Enter") return;
                        if (!await verifyToken()) return token = "Invalid token!";
                        authStore.set(token);
                    }}
                    placeholder="token"
                    type="text"
                />
            </div>
        </div>
    </div>
</main>

<style>
    .login {
        width: 100%;
    }

    input {
        cursor: crosshair;
        caret-shape: block;
        font-family: "Mint Soda";
    }
</style>