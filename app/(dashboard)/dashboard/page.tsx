import dayjs from "dayjs";
import PostItCard from "./PostItCard";
import Graph from "./Graph";
import Note from "./Note";
import { FiBook, FiFlag, FiHome } from "react-icons/fi";
import Link from "next/link";

export default async function Hello() {
	const dailyTasks = [
		"word of the day",
		"read article",
		"situational question",
	];

	const TODAY = dayjs().format("dddd, DD MMM");

	return (
		<main className="flex-1 space-y-6">
			<FiFlag className="text-deepOak hover:text-sepia w-6 h-6 cursor-pointer"></FiFlag>
			<div className="text-xl">Today is {TODAY}</div>
			<Note />
		</main>
	);
}
