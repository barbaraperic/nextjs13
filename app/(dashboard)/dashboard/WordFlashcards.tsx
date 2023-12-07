"use client";
import React, { ReactElement, useEffect, useState } from "react";
import useStore from "./store";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import dayjs from "dayjs";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { TaskType, WordType } from "@/app/types/types";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import { Heading3 } from "@/app/components/texts/Texts";

export default function WordFlashcards({ word }: { word: WordType }) {
	const add = useStore((state: any) => state.add);
	const remove = useStore((state: any) => state.remove);
	const [showTranslation, setShowTranslation] = useState(false);

	// useEffect(() => {
	// 	const fetchTasks = async () => {
	// 		const supabase = createClientComponentClient();

	// 		const { data } = await supabase.from("daily_tasks").select();

	// 		const todaysDailyTasks = data?.filter(
	// 			(item: TaskType) => item.date === dayjs().format("YYYY-MM-DD")
	// 		);

	// 		const isTodaysDailyTasksFullfilled =
	// 			todaysDailyTasks && todaysDailyTasks?.length > 1 ? true : false;

	// 		// setIsTodayFullfilled(isTodaysDailyTasksFullfilled);
	// 	};

	// 	fetchTasks();
	// }, []);

	return (
		<div className="w-full border rounded-md p-6 flex-col space-y-10 items-center relative flex gap-2">
			<Heading3>
				<span className="text-text-highlight">Word:</span> {word.translation}
			</Heading3>
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
				<p className="font-md italic">{word.word}</p>
				<p
					className={`${
						showTranslation ? "" : "backdrop-blur-sm	"
					} mb-3 italic`}>
					{word.context}
				</p>
			</div>
			<ButtonPrimary>Next</ButtonPrimary>
		</div>
	);
}
