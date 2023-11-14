import { useState } from "react";
import BasicModal from "./collection/WordModal";
import { SpacerComponent } from "./components/Spacer";
import Image from "next/image";
import { useRouter } from "next/router";
import PostItCard from "./(dashboard)/PostItCard";
import Graph from "./(dashboard)/Graph";
import dayjs from "dayjs";

export default function Home() {
	const dailyTasks = [
		"word of the day",
		"read article",
		"situational question",
	];

	return (
		<main className="relative pb-40">
			<div>
				<div className="flex space-x-10 justify-around">
					<PostItCard title="daily checklist" tasks={dailyTasks} />
					<PostItCard title="your goals" tasks={dailyTasks} />
				</div>
			</div>
			<SpacerComponent className="h-20"></SpacerComponent>
			<Graph />
		</main>
	);
}
