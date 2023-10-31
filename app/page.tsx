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
		"read article",
		"word of the day",
		"situational question",
	];

	return (
		<main className={`relative`}>
			<Graph />
			<SpacerComponent className="h-40"></SpacerComponent>
			<div>
				<div className="flex space-x-10 justify-around">
					<PostItCard title="daily checklist" tasks={dailyTasks} />
					<PostItCard title="weekly checklist" tasks={dailyTasks} />
				</div>
			</div>
		</main>
	);
}
