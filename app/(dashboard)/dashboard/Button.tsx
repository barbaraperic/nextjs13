"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useStore from "./store";
import dayjs from "dayjs";

export default function ButtonOutline({
	children,
	className,
}: {
	children: any;
	className?: string;
}) {
	const dailyTasks = useStore((state: any) => state.dailyTasks);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	async function handleClick(e: any) {
		setIsLoading(true);

		try {
			await Promise.all(
				dailyTasks.map(async (task: string) => {
					const newTask = {
						date: dayjs().format("YYYY-MM-DD"),
						task,
					};
					const res = await fetch("http://localhost:3000/api/dailytasks", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(newTask),
					});
					const json = await res.json();

					if (json.error) {
						console.log(json.error);
					}

					if (json.data) {
						router.refresh();
					}
				})
			);
		} catch (error) {
			console.error("Error", error);
		} finally {
			setIsLoading(false);
		}
	}
	return (
		<>
			<button
				onClick={handleClick}
				className={`${
					dailyTasks.length >= 1
						? "animate-fade-in block"
						: "animate-leave invisible"
				} border border-emmerald text-emmerald hover:text-darkerEmmerald hover:border-darkerEmmerald px-7 py-3 rounded-lg ${className}`}>
				{isLoading ? "Saving..." : children}
			</button>
		</>
	);
}
