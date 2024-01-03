"use client";
import Button from "@/app/components/Button";
import { CollectionType } from "@/app/types/types";
import spacedRepetitionFn, {
	EvaluationType,
} from "@/app/utils/spaced-repetition";
import React from "react";

export default function FlashcardsDifficultyButtons({
	flashcard,
}: {
	flashcard: CollectionType;
}) {
	const { interval, efactor } = flashcard;

	function handleClick(score: EvaluationType) {
		const res = spacedRepetitionFn({ interval, efactor }, score);
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
