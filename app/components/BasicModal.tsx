"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Heading3 } from "./texts/Texts";
import ButtonPrimary from "./ButtonPrimary";
import ExitIconComponent from "./icons/exitIcon";
import { SpacerComponent } from "./Spacer";

export default function BasicModal() {
	const router = useRouter();

	const [word, setWord] = useState("");
	const [translation, setTranslation] = useState("");
	const [context, setContext] = useState("");
	const [difficulty, setDifficulty] = useState("low");
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e: any) {
		e.preventDefault();
		setIsLoading(true);

		const newTicket = {
			word,
			translation,
			context,
			difficulty,
		};

		const res = await fetch("http://localhost:4000/words", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newTicket),
		});

		if (res.status === 201) {
			router.refresh();
			router.push("/words");
		}
	}

	function handleClose() {
		router.replace("/");
	}

	return (
		<div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-gray-500 bg-opacity-75 transition-opacity">
			<div className="w-[400px] bg-white min-h-[580px] border-2 p-3 rounded-lg pb-5">
				<div className="relative flex flex-col items-center space-y-6">
					<button
						className="cursor h-7 w-7 absolute right-0 flex justify-center items-center"
						onClick={handleClose}>
						<ExitIconComponent className="h-6"></ExitIconComponent>
					</button>
					<Heading3>add a new word</Heading3>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col space-y-4 items-center">
						<label className="w-full">
							<span>word</span>
							<input
								className="w-full border-2 p-2"
								required
								type="text"
								onChange={(e) => setWord(e.target.value)}
								value={word}
							/>
						</label>
						<label className="w-full">
							<span>translation</span>
							<input
								className="w-full border-2 p-2"
								required
								type="text"
								onChange={(e) => setTranslation(e.target.value)}
								value={translation}
							/>
						</label>
						<label className="w-full">
							<span>context</span>
							<textarea
								className="w-full border-2"
								required
								onChange={(e) => setContext(e.target.value)}
								value={context}
							/>
						</label>
						<label className="w-full">
							<span>difficulty</span>
							<select
								className="w-full border-2 p-2"
								onChange={(e) => setDifficulty(e.target.value)}
								value={difficulty}>
								<option value="low">Low</option>
								<option value="medium">Medium</option>
								<option value="high">High</option>
							</select>
						</label>
						<SpacerComponent className="h-4"></SpacerComponent>
						<ButtonPrimary
							className=" w-full"
							disabled={isLoading}
							onClick={handleSubmit}>
							{isLoading && <span>Adding...</span>}
							{!isLoading && <span>Add Word</span>}
						</ButtonPrimary>
					</form>
				</div>
			</div>
		</div>
	);
}
