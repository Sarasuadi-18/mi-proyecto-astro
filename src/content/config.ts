// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(), // <--- Ahora es opcional
		pubDate: z.coerce.date(),
		category: z.string().default('General'), // <--- Si no pones nada, dirá General
		image: z.string(),
	}),
});

export const collections = { blog };