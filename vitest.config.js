import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./tests/setup.js'],
        server: {
            deps: {
                inline: ['flowbite']
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(process.cwd(), './resources/js'),
            'flowbite': path.resolve(process.cwd(), './tests/mocks/flowbite.js')
        }
    }
});
