"use client";
import React, { useEffect, useState } from "react";
import EraseIconComponent from "../components/icons/eraserIcon";

export interface WordType {
	id: string;
	word: string;
	translation: string;
	context: string;
}

export default function WordsList() {
	const [words, setWords] = useState([]);
	const [wordId, setWordId] = useState("");
	const [loading, setLoading] = useState(true);
	const [flipped, setFlipped] = useState(false);

	useEffect(() => {
		fetch("http://localhost:4000/words")
			.then((res) => res.json())
			.then((data) => {
				setWords(data);
				setLoading(false);
			});
	}, []);

	function handleClick(id: string) {
		setWordId(id);
		setFlipped((flipped) => !flipped);
	}

	function handleErase() {
		// remove word
	}

	return (
		<div className="flex flex-col w-full relative border-dark border rounded-md">
			{words.map((word: WordType) => (
				<div
					key={word.id}
					className={`${
						flipped && wordId === word.id ? "rotate-360 " : "rotate-0 "
					} py-5 px-14 cursor-pointer flex justify-between items-center text-dark hover:bg-mediumGray transition-all  border-b last:border-0 border-dark`}
					onClick={() => handleClick(word.id)}>
					<p className="font-script text-4xl">
						{flipped && wordId === word.id ? word.translation : word.word}
					</p>
					<button onClick={handleErase}>
						<EraseIconComponent className="h-10"></EraseIconComponent>
					</button>
				</div>
			))}
			<div className="border-red border-l border-r absolute w-2 h-full left-6"></div>
		</div>
	);
}
