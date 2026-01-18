<script lang="ts">
    import { tool, color, brushSize } from '$lib/stores/paint';
</script>

<div class="toolbar">
    <select bind:value={$tool}>
        <option value="brush">Brush</option>
        <option value="eraser">Eraser</option>
    </select>

    <input type="color" bind:value={$color} />

    <input
        type="range"
        min="1"
        max="50"
        bind:value={$brushSize}
    />
</div>

<style>
    .toolbar {
        display: flex;
        gap: 8px;
        padding: 6px;
        background: linear-gradient(#f0f0f0, #dcdcdc);
        border-bottom: 1px solid #aaa;
    }
</style>