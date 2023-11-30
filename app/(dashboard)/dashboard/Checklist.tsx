"use client";
import React, { ReactElement, useEffect, useState } from "react";
import useStore from "./store";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import dayjs from "dayjs";

export interface TaskType {
	id: number;
	date: string;
	task: string;
}

export default function Checklist({
	children,
	id,
}: {
	children: ReactElement;
	id: string;
}) {
	const add = useStore((state: any) => state.add);
	const remove = useStore((state: any) => state.remove);
	const dailyTasks = useStore((state: any) => state.dailyTasks);
	const [data, setData] = useState<any[]>([]);
	const [isChecked, setIsChecked] = useState<boolean>();

	useEffect(() => {
		const fetchTasks = async () => {
			const supabase = createClientComponentClient();

			const { data } = await supabase.from("daily_tasks").select();
			setData([data]);

			const todaysDailyTasks = data?.filter(
				(item: TaskType) => item.date === dayjs().format("YYYY-MM-DD")
			);

			console.log(
				"=== todaysDailyTasks Checklist.tsx [36] ===",
				todaysDailyTasks
			);

			const taskIdIsCompleted =
				todaysDailyTasks && todaysDailyTasks.find((task) => task.task === id);
			taskIdIsCompleted && dailyTasks.push(taskIdIsCompleted);

			setIsChecked(taskIdIsCompleted ? true : false);
		};

		fetchTasks();
	}, []);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.currentTarget.checked) {
			add(e.currentTarget.dataset.id);
		} else remove(e.currentTarget.dataset.id);
	}

	return (
		<div className="w-full items-center relative flex gap-2">
			<input
				data-id={id}
				onChange={(e) => handleChange(e)}
				defaultChecked={isChecked}
				type="checkbox"
				className="relative rounded-md peer shrink-0 appearance-none h-6 w-6 border border-text-headline"
			/>
			<svg
				className="absolute left-1 text-text-headline w-4 h-4 hidden peer-checked:block pointer-events-none"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round">
				<polyline points="20 6 9 17 4 12"></polyline>
			</svg>
			{children}
		</div>
	);
}
