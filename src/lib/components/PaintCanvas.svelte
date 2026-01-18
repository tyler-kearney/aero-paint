<script lang="ts">
    import { onMount } from 'svelte';
    import { tool, color, brushSize } from '$lib/stores/paint';

    let canvas: HTMLCanvasElement;
    let ctx!: CanvasRenderingContext2D;
    let drawing = false;

    function startDraw(e: MouseEvent) {
        if (!ctx) return;
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }

    function draw(e: MouseEvent) {
        if (!drawing || !ctx) return;

        ctx.strokeStyle = $tool === 'eraser' ? '#FFFFFF' : $color;
        ctx.lineWidth = $brushSize;
        ctx.lineCap = 'round';

        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }

    function stopDraw() {
        drawing = false;
    }

    onMount(() => {
        ctx = canvas.getContext('2d')!;
        if (ctx) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    });
</script>

<canvas
    bind:this={canvas}
    width={800}
    height={600}
    on:mousedown={startDraw}
    on:mousemove={draw}
    on:mouseup={stopDraw}
    on:mouseleave={stopDraw}
></canvas>

<style>
    canvas {
        display: block;
        background: white;
        cursor: crosshair;
    }
</style>