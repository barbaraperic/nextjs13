"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Heading3, Paragraph } from "@/app/components/texts/Texts";
import Button from "@/app/components/Button";

export default function Flashcards({ flashcard }) {
	const [showTranslation, setShowTranslation] = useState(false);

	return (
		<div className="w-full min-h-[370px] border rounded-md p-6 flex-col space-y-6 items-center relative flex gap-2">
			<Heading3>{flashcard.translation}</Heading3>
			<button onClick={() => setShowTranslation(!showTranslation)}>
				{showTranslation ? (
					<FiEye className="w-6 h-6" />
				) : (
					<FiEyeOff className="w-6 h-6" />
				)}
			</button>
			<div
				className={`${
					showTranslation
						? ""
						: "text-transparent  [text-shadow:_0_0_5px_rgb(0_0_0_/_50%)]"
				} mb-3 flex-1`}>
				<Paragraph className="font-md italic">{flashcard.original}</Paragraph>
			</div>
			{/* <Button
				onClick={() => {
					setFlashcard(() => data[Math.floor(Math.random() * data.length)]);
				}}>
				Next
			</Button> */}
		</div>
	);
}
