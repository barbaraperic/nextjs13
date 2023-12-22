"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ExitIconComponent from "../../components/icons/exitIcon";
import Button from "@/app/components/Button";
import SpacerComponent from "@/app/components/Spacer";
import db from "@/utils/db";
import { newCollection } from "@/utils/actions";

const CollectionModal = () => {
	const router = useRouter();

	const [word, setWord] = useState("");
	const [translation, setTranslation] = useState("");
	const [context, setContext] = useState("");
	const [difficulty, setDifficulty] = useState("low");
	const [isLoading, setIsLoading] = useState(false);

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
						action={newCollection}
						// onSubmit={handleSubmit}
						className="flex flex-col space-y-4 items-center">
						<label className="w-full">
							<span>Front text</span>
							<input
								name="front-text"
								className="w-full border-2 p-2"
								required={true}
								type="text"
								// onChange={(e) => setWord(e.target.value)}
								// value={word}
							/>
						</label>
						<label className="w-full">
							<span>Back text</span>
							<input
								name="back-text"
								className="w-full border-2 p-2"
								required={true}
								type="text"
								// onChange={(e) => setTranslation(e.target.value)}
								// value={translation}
							/>
						</label>
						<SpacerComponent size="small"></SpacerComponent>
						<Button type="submit" className=" w-full" intent="secondary">
							{isLoading && <span>Adding...</span>}
							{!isLoading && <span>Add word</span>}
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CollectionModal;
