import { FiRefreshCcw } from "react-icons/fi";
import { Heading3, Paragraph } from "@/app/components/texts/Texts";
// import Button from "@/app/components/Button";
import { CollectionType } from "@/app/types/types";
import FlashcardsFlip from "./flashcards-flip";

export default function Flashcards({
	flashcard,
}: {
	flashcard: CollectionType;
}) {
	console.log(flashcard);
	return (
		<div className="min-h-[370px] w-[600px] border rounded-md p-6 flex-col space-y-6 items-center relative flex gap-2">
			{/* <FlashcardsFlip /> */}
			<div className={` mb-3 flex-1`}>
				<Paragraph className="font-md italic">{flashcard.backText}</Paragraph>
			</div>
		</div>
	);
}
