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
		<div>
			<Flashcard flashcard={flashcards[0]}></Flashcard>
		</div>
	);
}
