import { getAllCollections } from "@/utils/actions";
import dayjs from "dayjs";

export default async function getTodaysFlashcards() {
	const collection = await getAllCollections();

	const today = dayjs().format("YYYY-MM-DD");

	const todaysFlashcards = collection.data.filter(
		(f) => f.nextReview === today || f.nextReview === ""
	);

	const indexedCollection = todaysFlashcards.map((c, index) => ({
		index,
		...c,
	}));
}
