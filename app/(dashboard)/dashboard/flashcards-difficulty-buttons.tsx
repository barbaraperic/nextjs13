"use client";
import Button from "@/app/components/button";
import { CollectionType } from "@/app/types/types";
import spacedRepetitionFn, {
	EvaluationType,
} from "@/app/utils/spaced-repetition";
import { updateCollection } from "@/utils/actions";
import React from "react";

export default function FlashcardsDifficultyButtons({
	flashcard,
}: {
	flashcard: CollectionType;
}) {
	const { interval, efactor, nextReview, id } = flashcard;

	console.log(">", flashcard);

	async function handleClick(score: EvaluationType) {
		const res = spacedRepetitionFn({ interval, efactor, nextReview }, score);
		const collection = await updateCollection(res, id);
		console.log("collection", collection);
	}

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
					<Button
						intent="primary"
						size="medium"
						onClick={() => handleClick(button.score)}>
						{button.title}
					</Button>
				</React.Fragment>
			))}
		</div>
	);
}
