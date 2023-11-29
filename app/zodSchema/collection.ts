import z from "zod";

export const collectionSchema = z.object({
	word: z.string().max(255),
	translation: z.string().max(255),
	context: z.string().max(255),
});

export type User = z.infer<typeof collectionSchema>;
