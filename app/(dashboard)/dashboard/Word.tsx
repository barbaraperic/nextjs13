import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import WordFlashcards from "./flashcard-list";
import SaveProgressButton from "./save-progress-button";

async function getWords() {
	const supabase = createServerComponentClient({ cookies });

	const { data, error } = await supabase.from("words").select();

	if (error) {
		console.log(error.message);
	}

	return data;
}

export default async function Word() {
	const words = await getWords();

	console.log(words);

	return (
		<div className="relative w-full">
			<section className="flex space-x-2 m-auto mb-6 shadow-md items-center max-w-2xl">
				{/* {words && <WordFlashcards words={words}></WordFlashcards>} */}
			</section>
			<SaveProgressButton>Check off today</SaveProgressButton>
		</div>
	);
}
