"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import ExitIconComponent from "../../components/icons/exitIcon";
import { SpacerComponent } from "../../components/Spacer";

export default function WordModal() {
	const router = useRouter();

	const [word, setWord] = useState("");
	const [translation, setTranslation] = useState("");
	const [context, setContext] = useState("");
	const [difficulty, setDifficulty] = useState("low");
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e: any) {
		e.preventDefault();
		setIsLoading(true);

		const newWord = {
			word,
			translation,
			context,
			difficulty,
		};

		const res = await fetch("http://localhost:3000/api/words", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newWord),
		});

		const json = await res.json();

		if (json.error) {
			console.log(json.error);
		}
		if (json.data) {
			router.refresh();
			router.push("/collection");
		}
	}

	function handleClose() {
		router.replace("/collection");
	}

	return (
		<div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-gray-500 bg-opacity-75 transition-opacity">
			<div className="w-[400px] bg-background-card flex flex-col justify-center relative min-h-[530px] border-2 p-3 rounded-lg pb-5">
				<button
					className="cursor h-7 w-7 absolute right-2 top-2 flex justify-center items-center"
					onClick={handleClose}>
					<ExitIconComponent className="h-6 text-text-headline"></ExitIconComponent>
				</button>
				<div className="flex flex-col items-center space-y-6">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col space-y-4 items-center">
						<label className="w-full">
							<span>word</span>
							<input
								className="w-full border-2 p-2"
								required={true}
								type="text"
								onChange={(e) => setWord(e.target.value)}
								value={word}
							/>
						</label>
						<label className="w-full">
							<span>translation</span>
							<input
								className="w-full border-2 p-2"
								required={true}
								type="text"
								onChange={(e) => setTranslation(e.target.value)}
								value={translation}
							/>
						</label>
						<label className="w-full">
							<span>context</span>
							<textarea
								className="w-full p-2 border-2"
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
							type="submit">
							{isLoading && <span>Adding...</span>}
							{!isLoading && <span>Add word</span>}
						</ButtonPrimary>
					</form>
				</div>
			</div>
		</div>
	);
}
