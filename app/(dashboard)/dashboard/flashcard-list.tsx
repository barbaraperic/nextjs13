"use client";
import { CollectionType } from "@/app/types/types";
import Link from "next/link";

export default function Flashcard({
	flashcards,
}: {
	flashcards: CollectionType[];
}) {
	if (typeof window !== "undefined") {
		localStorage.setItem("id", JSON.stringify(flashcards.map((f) => f.id)));
	}

	return (
		<div>
			<Link href={`/dashboard/${flashcards[0].id}`}>Start practicing</Link>
		</div>
	);
}
