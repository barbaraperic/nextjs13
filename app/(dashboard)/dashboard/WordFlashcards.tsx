"use client";
import React, { ReactElement, useEffect, useState } from "react";
import useStore from "./store";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import dayjs from "dayjs";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { TaskType, WordType } from "@/app/types/types";
import { Heading3, Paragraph } from "@/app/components/texts/Texts";
import Button from "@/app/components/Button";

export default function WordFlashcards({ words }: { words: WordType[] }) {
	const add = useStore((state: any) => state.add);
	const [showTranslation, setShowTranslation] = useState(false);
	const [word, setWord] = useState({
		word: "",
		translation: "",
		context: "",
	});

	function generateRandomWord() {
		const randomWordIndex = Math.floor(
			Math.random() * (words ? words.length : 1)
		);
		setWord(words[randomWordIndex]);
	}

	useEffect(() => {
		generateRandomWord();
	}, []);

	function handleNext() {
		add("word");
	}

	return (
		<div className="w-full min-h-[370px] border rounded-md p-6 flex-col space-y-6 items-center relative flex gap-2">
			<Heading3 className="text-text-highlight">{word.translation}</Heading3>
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
				<Paragraph className="font-md italic">{word.word}</Paragraph>
				<Paragraph className={`${showTranslation ? "" : "backdrop-blur-sm	"}`}>
					{word.context}
				</Paragraph>
			</div>
			<Button
				onClick={() => {
					handleNext();
					return {};
				}}>
				Next
			</Button>
		</div>
	);
}
