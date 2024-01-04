"use client";
import { CollectionType } from "@/app/types/types";
import Flashcard from "./flashcard";

export default function FlashcardList({
	flashcards,
}: {
	flashcards: CollectionType[];
}) {
	console.log("flashcards", flashcards);
	const randomFlashcard = Math.floor(Math.random() * flashcards.length);

	return (
		<div className="relative min-h-[370px] flex justify-center items-center w-[600px] border-4 border-green-300 rounded-md p-6 flex-col space-y-6">
			<Flashcard flashcard={flashcards[0]}></Flashcard>
		</div>
	);
}
