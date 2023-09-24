<script lang="ts">
    export let text: string;
</script>

<div class="flex a-center g-m">
    <div class="loading-icon grid g-s">
        <div class="c1 circle round" />
        <div class="c2 circle round" />
        <div class="c3 circle round" />
        <div class="c4 circle round" />
        <div class="c5 circle round" />
        <div class="c6 circle round" />
    </div>
    <p>{text}</p>
</div>

<style>
    .loading-icon {
        grid-template-columns: .5rem .5rem;
        grid-template-rows:    .33rem .33rem .33rem;
        animation:             loading .4s ease infinite;
        --color-1: #ffffff;
        --color-2: #ffffff;
        --color-3: #ffffff;
        --color-4: #ffffff;
        --color-5: #ffffff;
        --color-6: #ffffff;
    }

    .circle {
        height: .4rem;
        width:  .4rem;
    }

    .c1 {
        background-color: var(--color-1);
    }
    .c2 {
        background-color: var(--color-2);
    }
    .c3 {
        background-color: var(--color-3);
    }
    .c4 {
        background-color: var(--color-4);
    }
    .c5 {
        background-color: var(--color-5);
    }
    .c6 {
        background-color: var(--color-6);
    }

    @keyframes loading {
        0% {
            --color-1: var(--color-select);
            --color-2: #ffffff;
            --color-3: #ffffff;
            --color-4: #ffffff;
            --color-5: #ffffff;
            --color-6: #ffffff;
        }
        20% {
            --color-1: #ffffff;
            --color-2: var(--color-select);
            --color-3: #ffffff;
            --color-4: #ffffff;
            --color-5: #ffffff;
            --color-6: #ffffff;
        }
        40% {
            --color-1: #ffffff;
            --color-2: #ffffff;
            --color-3: var(--color-select);
            --color-4: #ffffff;
            --color-5: #ffffff;
            --color-6: #ffffff;
        }
        60% {
            --color-1: #ffffff;
            --color-2: #ffffff;
            --color-3: #ffffff;
            --color-4: var(--color-select);
            --color-5: #ffffff;
            --color-6: #ffffff;
        }
        80% {
            --color-1: #ffffff;
            --color-2: #ffffff;
            --color-3: #ffffff;
            --color-4: #ffffff;
            --color-5: var(--color-select);
            --color-6: #ffffff;
        }
        100% {
            --color-1: #ffffff;
            --color-2: #ffffff;
            --color-3: #ffffff;
            --color-4: #ffffff;
            --color-5: #ffffff;
            --color-6: var(--color-select);
        }
    }
</style>