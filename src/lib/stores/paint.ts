import { writable } from 'svelte/store';

export type Tool = "brush" | "eraser";

export const tool = writable<Tool>("brush");
export const color = writable<string>("#000000");
export const brushSize = writable<number>(4);