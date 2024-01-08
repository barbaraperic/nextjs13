import { getCollection } from "@/utils/actions";
import Flashcard from "../flashcard";

export default async function FlashcardPage({
	params,
}: {
	params: { id: string };
}) {
	const { data: collection } = await getCollection(params.id);

	return (
		<div className="m-auto">
			<Flashcard flashcard={collection}></Flashcard>
		</div>
	);
}
