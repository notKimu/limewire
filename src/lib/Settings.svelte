<script>

  import { settingsState } from "./stores";

</script>
<main class="fullscreen-abs flex j-center p-m">
    <section class="w-75 grid g-m br-m overflow-hidden">
        <nav class="box-dark flex col g-m p-x">
            <button class="p-x br-m text-left"><h1>Profile</h1></button>
            <button class="p-x br-m text-left"><h1>Status</h1></button>
            <button class="p-x br-m text-left"><h1>Colors</h1></button>
        </nav>
    
        <div class="setting-page">
            
        </div>

        <button class="close square-xxx p-m" on:click={() => $settingsState = false}>
            <h1>X</h1>
        </button>
    </section>
</main>

<style>
    main {
        background-color: var(--color-box-light);
    }

    section {
        grid-template-columns: 15rem 1fr 4rem;
        z-index:               100;
    }

    button:hover {
        background-color: var(--color-select);
    }

    .setting-page {
        background-color: red;
    }

    .close {
        border:        .15rem solid var(--color-select);
        border-radius: 0 .5rem 0 0;
    }
</style>