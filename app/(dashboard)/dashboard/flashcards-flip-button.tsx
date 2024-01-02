"use client";
import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

export default function FlashcardsFlipButton() {
	const [showTranslation, setShowTranslation] = useState(false);

	return (
		<button
			onClick={() => setShowTranslation(!showTranslation)}
			className="absolute top-6 right-6">
			<FiRefreshCcw className="h-5 w-5 text-green-300" />
		</button>
	);
}
