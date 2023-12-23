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
