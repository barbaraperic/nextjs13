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
		<div className="rounded-xl cursor-pointer hover:scale-105 active:scale-100 transition duration-200 ease-in-out shadow-basic">
			<Flashcard flashcard={flashcards[0]}></Flashcard>
		</div>
	);
}
