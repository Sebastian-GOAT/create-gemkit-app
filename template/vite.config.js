import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({

    root: '.',
    base: './',

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },

    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: 'esbuild',
    },

    server: {
        port: 5173,
        strictPort: true,
        open: false,
    },

    plugins: [
        tailwindcss()
    ]

});