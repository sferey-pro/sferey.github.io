// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://sferey.com',
	server: {
		port: 4321,
		host: true,
	},
	image: {
		service: passthroughImageService(), // Disabled optimized Image https://github.com/withastro/astro/issues/9966
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		mdx({
			optimize: true,
		}),
		icon(),
	],
	markdown: {
		syntaxHighlight: false,
		remarkPlugins: [
			[remarkToc, { heading: 'table of contents', maxDepth: 3, skip: 'Introduction' }],
		],
	},
});
