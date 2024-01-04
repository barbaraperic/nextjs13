"use client";
import { Paragraph } from "@/app/components/texts/Texts";
import { CollectionType } from "@/app/types/types";
import FlashcardsDifficultyButtons from "./flashcards-difficulty-buttons";
import { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

export default function Flashcard({
	flashcard,
}: {
	flashcard: CollectionType;
}) {
	const { frontText, backText } = flashcard;
	const [showBackFlip, setShowBackFlip] = useState(false);

	return (
		<div
			onClick={() => setShowBackFlip((state) => !state)}
			className="relative min-h-[370px] flex justify-center items-center w-[600px] border-4 border-green-300 rounded-md p-6 flex-col space-y-6">
			{/* <button className="absolute top-6 right-6">
				<FiRefreshCcw className="h-5 w-5 text-green-300" />
			</button> */}
			<Paragraph className="flex items-center text-green-300 flex-1">
				{showBackFlip ? backText : frontText}
			</Paragraph>
			<FlashcardsDifficultyButtons flashcard={flashcard} />
		</div>
	);
}
