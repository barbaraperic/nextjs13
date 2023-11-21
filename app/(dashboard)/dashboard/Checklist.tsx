"use client";
import React, { ReactElement, useEffect } from "react";
import useStore from "./store";

export default function Checklist({ children }: { children: ReactElement }) {
	const counter = useStore((state: any) => state.counter);
	const increment = useStore((state: any) => state.increment);
	const decrement = useStore((state: any) => state.decrement);
	const setShowDailyTask = useStore((state: any) => state.setShowDailyTask);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.currentTarget.checked) {
			increment();
		} else decrement();
	}

	useEffect(() => {
		if (counter === 2) {
			setShowDailyTask(true);
		} else setShowDailyTask(false);
	}, [counter, setShowDailyTask]);

	return (
		<div className="w-full items-center relative flex gap-2">
			<input
				onChange={(e) => handleChange(e)}
				type="checkbox"
				className="relative rounded-md peer shrink-0 appearance-none h-6 w-6 border border-deepOak"
			/>
			<svg
				className="absolute left-1 text-deepOak w-4 h-4 hidden peer-checked:block pointer-events-none"
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
