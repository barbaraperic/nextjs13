"use client";
import { Paragraph } from "@/app/components/texts/texts";
import { CollectionType } from "@/app/types/types";
import FlashcardsDifficultyButtons from "./flashcards-difficulty-buttons";
import { useState } from "react";
import next from "next";
import { FiRefreshCcw } from "react-icons/fi";
import FlashcardFinish from "./flashcard-finish";

export default function Flashcard({
	flashcard,
}: {
	flashcard: CollectionType;
}) {
	const [showBackFlip, setShowBackFlip] = useState(false);

	const storedValue = localStorage.getItem("id");
	let nextFlashcards;

	if (storedValue) {
		try {
			const flashcards = JSON.parse(storedValue);
			console.log(flashcards);
			nextFlashcards = flashcards.filter((f: string) => f !== flashcard.id);
			localStorage.setItem("id", JSON.stringify(nextFlashcards));

			// Use nextFlashcard as needed
		} catch (error) {
			console.error("Error parsing JSON:", error);
		}
	} else {
		console.log("No data found in local storage with key 'id'");
	}

	if (!flashcard) {
		return <FlashcardFinish />;
	}

	const { frontText, backText } = flashcard;

	return (
		<div
			className={`relative cursor-pointer min-h-[370px] shadow-md flex justify-center items-center w-[600px] border-4 border-green-300  p-6 flex-col space-y-6`}>
			<button
				className="absolute top-6 right-6"
				onClick={() => setShowBackFlip((state) => !state)}>
				<FiRefreshCcw className="h-5 w-5 text-green-300" />
			</button>
			<Paragraph className="flex items-center text-green-300 flex-1">
				{showBackFlip ? backText : frontText}
			</Paragraph>
			<FlashcardsDifficultyButtons
				flashcard={flashcard}
				nextFlashcardId={nextFlashcards[0]}
			/>
		</div>
	);
}
