// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://sferey.com',
    server: {
        port: 4321,
        host: true,
    },
});
