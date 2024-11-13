import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const authors = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		avatar: z.string().url(),
	}),
});

const work = defineCollection({
	type: 'content',
	schema: () =>
		z.object({
			title: z.string(),
			logoImg: z.string(),
			metadata: z.object({
				job_description: z.string(),
				excerpt: z.string().optional(),
			}),
			startedDate: z.coerce.date(),
			endedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).optional(),
			website: z.string().url().optional(),
			linkedin: z.string().url().optional(),
			disabled: z.boolean().default(false),
		}),
});

export const collections = { blog, authors, work };
