"use client";
import React, { ReactElement, useEffect, useState } from "react";
import useStore from "./store";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import dayjs from "dayjs";
import { TaskType } from "@/app/types/types";

export default function Checklist({
	children,
	id,
}: {
	children: ReactElement;
	id: string;
}) {
	const add = useStore((state: any) => state.add);
	const remove = useStore((state: any) => state.remove);
	const [isTodayFullfilled, setIsTodayFullfilled] = useState<boolean>(false);

	useEffect(() => {
		const fetchTasks = async () => {
			const supabase = createClientComponentClient();

			const { data } = await supabase.from("daily_tasks").select();

			const todaysDailyTasks = data?.filter(
				(item: TaskType) => item.date === dayjs().format("YYYY-MM-DD")
			);

			const isTodaysDailyTasksFullfilled =
				todaysDailyTasks && todaysDailyTasks?.length > 1 ? true : false;

			setIsTodayFullfilled(isTodaysDailyTasksFullfilled);
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
				type="checkbox"
				className={`relative ${
					isTodayFullfilled ? "hidden" : ""
				} rounded-md peer shrink-0 appearance-none h-6 w-6 border border-text-headline`}
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
