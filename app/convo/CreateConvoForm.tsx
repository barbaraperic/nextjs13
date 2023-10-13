"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ButtonText } from "../components/texts/Texts";

export default function CreateConvoForm() {
	const router = useRouter();

	const [title, setTitle] = useState("");
	const [conversation, setConversation] = useState("");
	const [difficulty, setDifficulty] = useState("low");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setIsLoading(true);

		const newTicket = {
			title,
			conversation,
			difficulty,
		};

		const res = await fetch("http://localhost:4000/conversations", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newTicket),
		});

		if (res.status === 201) {
			router.refresh();
			router.push("/convo");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col space-y-4 items-center">
			<label className="w-full">
				<textarea
					className="w-full"
					required
					onChange={(e) => setConversation(e.target.value)}
					value={conversation}
				/>
			</label>
			<label className="w-full">
				<span>Difficulty:</span>
				<select
					className="w-full"
					onChange={(e) => setDifficulty(e.target.value)}
					value={difficulty}>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
			</label>
			<button className="btn-primary" disabled={isLoading}>
				{isLoading && <ButtonText>Adding...</ButtonText>}
				{!isLoading && <ButtonText>Add Ticket</ButtonText>}
			</button>
		</form>
	);
}
