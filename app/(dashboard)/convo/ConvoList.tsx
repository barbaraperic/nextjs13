"use client";
import React, { useEffect, useState } from "react";

export interface WordType {
	id: string;
	title: string;
	conversation: string;
	difficulty: string;
}

export default function ConvoList() {
	const [conversations, setConversations] = useState([]);
	const [wordId, setWordId] = useState("");
	const [loading, setLoading] = useState(true);
	const [flipped, setFlipped] = useState(false);

	useEffect(() => {
		fetch("http://localhost:4000/conversations")
			.then((res) => res.json())
			.then((data) => {
				setConversations(data);
				setLoading(false);
			});
	}, []);

	function handleClick(id: string) {
		setWordId(id);
		setFlipped((flipped) => !flipped);
	}

	return (
		<>
			{conversations.map((word: WordType, index) => (
				<div key={index}>
					<h2>{word.title}</h2>
					<p>{word.conversation}</p>
				</div>
			))}
		</>
	);
}
