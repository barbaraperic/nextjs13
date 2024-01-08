"use client";
import Button from "@/app/components/button";
import LinkPrimary from "@/app/components/link-primary";
import { CollectionType } from "@/app/types/types";
import spacedRepetitionFn, {
	EvaluationType,
} from "@/app/utils/spaced-repetition";
import { updateCollection } from "@/utils/actions";
import React from "react";

export default function FlashcardsDifficultyButtons({
	flashcard,
	nextFlashcardId,
}: {
	flashcard: CollectionType;
	nextFlashcardId: string;
}) {
	const { interval, efactor, nextReview, id } = flashcard;

	async function handleClick(score: EvaluationType) {
		const res = spacedRepetitionFn({ interval, efactor, nextReview }, score);
		const collection = await updateCollection(res, id);
	}

	console.log(nextFlashcardId);

	const buttons = [
		{
			title: "Hard",
			score: 0 as EvaluationType,
		},
		{
			title: "Good",
			score: 1 as EvaluationType,
		},
		{
			title: "Easy",
			score: 2 as EvaluationType,
		},
	];

	return (
		<div className="w-full flex justify-center space-x-5">
			{buttons.map((button, index) => (
				<React.Fragment key={index}>
					<LinkPrimary href={`${nextFlashcardId ? nextFlashcardId : "end"}`}>
						<button onClick={() => handleClick(button.score)}>
							{button.title}
						</button>
					</LinkPrimary>
				</React.Fragment>
			))}
		</div>
	);
}
