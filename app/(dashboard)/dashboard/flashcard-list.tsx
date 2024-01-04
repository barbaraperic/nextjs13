"use client";
import { Paragraph } from "@/app/components/texts/Texts";
import { CollectionType } from "@/app/types/types";
import FlashcardsDifficultyButtons from "./flashcards-difficulty-buttons";
import { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import Flashcards from "./flashcard";

export default function FlashcardList({
	flashcards,
}: {
	flashcards: CollectionType[];
}) {
	console.log(flashcards);
	const randomFlashcard = Math.floor(Math.random() * flashcards.length);

	return (
		<div className="relative min-h-[370px] flex justify-center items-center w-[600px] border-4 border-green-300 rounded-md p-6 flex-col space-y-6">
			<Flashcards flashcard={randomFlashcard}></Flashcards>
		</div>
	);
}
