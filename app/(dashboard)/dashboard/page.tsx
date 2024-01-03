import Flashcards from "./flashcards";
import { getAllCurrentCollections } from "@/utils/actions";
import React from "react";
import { Props } from "@/app/types/types";

export default async function Dashboard({ searchParams }: Props) {
	const collection = await getAllCurrentCollections();

	const randomFlashcard =
		collection.data[Math.floor(Math.random() * collection.data.length)];

	return (
		<main className="flex flex-1 h-full flex-col">
			<section className="relative mb-6 rounded-lg space-y-10 flex-1 flex justify-center items-center">
				<div className="min-w-3xl">
					<Flashcards flashcard={randomFlashcard} />
				</div>
			</section>
		</main>
	);
}
