import { writable } from 'svelte/store';

export const currentSong = writable(null);
export const isPlaying = writable(false);
export const isSidebarOpen = writable(true);
