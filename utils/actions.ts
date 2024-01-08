"use server";

import db from "@/utils/db";
import { revalidatePath } from "next/cache";

export const newCollection = async (formData: any) => {
	await db.collection.create({
		data: {
			frontText: formData.get("front-text"),
			backText: formData.get("back-text"),
		},
	});

	revalidatePath("/collection");
};

export const updateCollection = async (data: any, id: string) => {
	const updated = await db.collection.update({
		where: {
			id: id,
		},
		data: {
			efactor: data.efactor,
			nextReview: data.nextReview,
		},
	});

	return {
		data: updated,
	};
};

export const getCollection = async (id: string) => {
	const collection = await db.collection.findUnique({
		where: { id },
	});

	return { data: collection };

	// revalidatePath("/collection");
};

export const getAllCollections = async () => {
	const collection = await db.collection.findMany({});

	return { data: collection };

	// revalidatePath("/collection");
};
