"use client";
import Button from "@/app/components/Button";
import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

export default function FlashcardsDifficultyButtons() {
	const [showTranslation, setShowTranslation] = useState(false);

	return (
		<div className="w-full flex justify-around ">
			<Button
				intent="tertiarySuccess"
				size="large"
				onClick={() => setShowTranslation(!showTranslation)}
				className="">
				Easy
			</Button>
			<Button
				intent="tertiaryWarning"
				size="large"
				onClick={() => setShowTranslation(!showTranslation)}
				className="">
				Hard
			</Button>
		</div>
	);
}
