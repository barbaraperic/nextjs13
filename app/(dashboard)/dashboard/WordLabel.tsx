"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface WordType {
	context: string;
	translation: string;
	difficulty: "low" | "medium" | "hard";
}

export default function WordLabel({ word }: { word: WordType }) {
	const [showTranslation, setShowTranslation] = useState(false);
	return (
		<div className="space-y-6">
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
						: "text-transparent [text-shadow:_0_0_5px_rgb(0_0_0_/_50%)]"
				} mb-3`}>
				<p className="font-md">
					<span className="text-bold">Eng:</span> {word.translation}
				</p>
				<p
					className={`${
						showTranslation ? "" : "backdrop-blur-sm	"
					} mb-3 italic`}>
					{word.context}
				</p>
			</div>
		</div>
	);
}
