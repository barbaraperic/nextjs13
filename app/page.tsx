import { useState } from "react";
import Link from "next/link";
import BasicModal from "./components/BasicModal";
import { SpacerComponent } from "./components/Spacer";
import Image from "next/image";
import { useRouter } from "next/router";
import PostItCard from "./(dashboard)/PostItCard";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: Props) {
	const showModal = searchParams?.modal;

	const dailyTasks = [
		"read article",
		"word of the day",
		"situational question",
	];

	return (
		<main className={`relative`}>
			<SpacerComponent className="h-40"></SpacerComponent>
			<div>
				<div className="flex space-x-10 justify-around">
					<PostItCard title="daily checklist" tasks={dailyTasks} />
					<PostItCard title="weekly checklist" tasks={dailyTasks} />
				</div>
				{showModal && <BasicModal />}
			</div>
			{/* <Link
				href="/?modal=true"
				className="py-4 min-w-[260px] bg-black  text-white flex justify-center text-lg rounded-xl cursor">
				add a new word
			</Link> */}
		</main>
	);
}
