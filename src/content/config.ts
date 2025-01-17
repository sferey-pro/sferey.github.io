import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		description: z.string(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		// Reference an array of related posts from the `blog` collection by `slug`
		relatedPosts: z.array(reference('blog')).optional(),
	}),
});

const work = defineCollection({
	type: 'content',
	schema: () =>
		z.object({
			title: z.string(),
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

export const collections = { blog, work };
