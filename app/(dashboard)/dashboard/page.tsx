import Flashcards from "./flashcard-list";
import { getAllCurrentCollections } from "@/utils/actions";
import React from "react";
import { Props } from "@/app/types/types";
import FlashcardList from "./flashcard-list";

export default async function Dashboard({ searchParams }: Props) {
	const collection = await getAllCurrentCollections();

	const randomFlashcard =
		collection.data[Math.floor(Math.random() * collection.data.length)];

	// [{}, {}, {}, {}]

	// filter by date [{}, {}]
	// total = 2

	// add a parent component that has the filtered flashcards and holds ref state for solved amount

	const filteredFlashcards = collection.data.filter((c) => c.interval);

	return (
		<main className="flex flex-1 h-full flex-col">
			<section className="relative mb-6 rounded-lg space-y-10 flex-1 flex justify-center items-center">
				<div className="min-w-3xl">
					<FlashcardList flashcards={filteredFlashcards} />
				</div>
			</section>
		</main>
	);
}
