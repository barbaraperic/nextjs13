"use client";
import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

export default function FlashcardsFlip() {
	const [showTranslation, setShowTranslation] = useState(false);

	return (
		<button onClick={() => setShowTranslation(!showTranslation)}>
			<FiRefreshCcw />
		</button>
	);
}
