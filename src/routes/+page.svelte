<script lang="ts">
    import Toolbar from '$lib/components/Toolbar.svelte';
    import PaintCanvas from '$lib/components/PaintCanvas.svelte';
</script>

<div class="app">
    <Toolbar />
    <PaintCanvas />
</div>

<style>
    .app {
        height: 100vh;
        display: flex;
        flex-direction: column;
        background: #ececec;
    }
</style>