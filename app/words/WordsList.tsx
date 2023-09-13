import React from "react";

interface WordType {
	id: string;
	word: string;
	translation: string;
	context: string;
}

async function getWords() {
	const res = await fetch("http://localhost:4000/words", {
		next: {
			revalidate: 0, // use 0 to opt out of using cache
		},
	});

	return res.json();
}

export default async function WordsList() {
	const words = await getWords();

	return (
		<>
			{words.map((word: WordType) => (
				<div key={word.id} className="card my-5">
					<p>{word.word}</p>
				</div>
			))}
		</>
	);
}
