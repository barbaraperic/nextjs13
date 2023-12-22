import db from "@/utils/db";

export const newCollection = async (formData: any) => {
	const collection = await db.collection.create({
		data: {
			frontText: formData.get("front-text"),
			backText: formData.get("back-text"),
		},
	});

	return { data: collection };
};
