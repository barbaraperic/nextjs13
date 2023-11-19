import { useState } from "react";
import BasicModal from "../collection/WordModal";
import { SpacerComponent } from "../../components/Spacer";
import Image from "next/image";
import { useRouter } from "next/router";
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
		<main className="relative w-full flex h-screen">
			<div className="min-w-[400px] border-r border-deepOak pt-12 pr-9 space-y-8">
				<div className="flex space-x-3">
					<Link href="/">
						<FiHome className="text-deepOak hover:text-sepia w-6 h-6 cursor-pointer hover:text-"></FiHome>
					</Link>
					<Link href="/collection">
						<FiBook className="text-deepOak hover:text-sepia w-6 h-6 cursor-pointer"></FiBook>
					</Link>
				</div>
				<div className="min-h-[488px]">
					<Graph />
				</div>
				<PostItCard title="daily checklist" tasks={dailyTasks} />
			</div>
			<div className="flex-1 pt-12 p-9 space-y-6">
				<FiFlag className="text-deepOak hover:text-sepia w-6 h-6 cursor-pointer"></FiFlag>
				<div className="text-xl">Today is {TODAY}</div>
				<Note />
			</div>
		</main>
	);
}
