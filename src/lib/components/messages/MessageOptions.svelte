<script lang="ts">
    export let type: "moderatable" | "author" | "external" = "external";
</script>

<div class="options box-light flex br-m overflow-hidden">
    <button class="square-xl grid centerineitor hover">
        X
    </button>
    <button class="square-xl grid centerineitor hover">
        Y
    </button>
    <button class="square-xl grid centerineitor hover">
        Z
    </button>
</div>

<style>
    .options {
        height: 2rem;
        transform: translateY(-50%);
    }
</style>