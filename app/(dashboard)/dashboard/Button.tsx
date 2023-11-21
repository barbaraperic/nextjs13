"use client";
import useStore from "./store";

export default function ButtonOutline({
	children,
	className,
}: {
	children: any;
	className?: string;
}) {
	const showDailyTask = useStore((state: any) => state.showDailyTask);
	return (
		<>
			<button
				className={`${
					showDailyTask ? "animate-fade-in block" : "animate-leave hidden"
				} border  border-deepOak hover:text-sepia hover:border-sepia px-7 py-3 rounded-lg ${className}`}>
				{children}
			</button>
		</>
	);
}
