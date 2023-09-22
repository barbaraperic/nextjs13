"use client";
import React, { useEffect, useState } from "react";

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

	return (
		<div className="flex flex-col w-full">
			{words.map((word: WordType) => (
				<div
					key={word.id}
					className={`${
						flipped && wordId === word.id
							? "rotate-360 text-secondary font-bold "
							: "rotate-0 "
					} card my-5`}
					onClick={() => handleClick(word.id)}>
					<p>{flipped && wordId === word.id ? word.translation : word.word}</p>
				</div>
			))}
		</div>
	);
}
