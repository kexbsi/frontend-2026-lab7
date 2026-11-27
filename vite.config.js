import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base — шлях, за яким сайт відкривається на GitHub Pages:
// https://kexbsi.github.io/frontend-2026-lab7/
export default defineConfig({
    plugins: [react()],
    base: '/frontend-2026-lab7/',
});
