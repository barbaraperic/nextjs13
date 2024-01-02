import { FiRefreshCcw } from "react-icons/fi";
import { Heading3, Paragraph } from "@/app/components/texts/Texts";
import { CollectionType } from "@/app/types/types";
import FlashcardsFlipButton from "./flashcards-flip-button";
import FlashcardsDifficultyButtons from "./flashcards-difficulty-buttons";

export default function Flashcards({
	flashcard,
}: {
	flashcard: CollectionType;
}) {
	console.log(flashcard);
	return (
		<div className="relative min-h-[370px] flex justify-center items-center w-[600px] border-4 border-green-300 rounded-md p-6 flex-col space-y-6">
			<FlashcardsFlipButton />
			<Paragraph className="flex items-center text-green-300 flex-1">
				{flashcard.frontText}
			</Paragraph>
			{/* <Paragraph>{flashcard.backText}</Paragraph> */}
			<FlashcardsDifficultyButtons />
		</div>
	);
}
