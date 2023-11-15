import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import PortugueseFlagComponent from "../components/icons/portugueseFlag";

export default function Homepage() {
	const dailyTasks = [
		"word of the day",
		"read article",
		"situational question",
	];

	return (
		<main className="relative h-4/6 flex justify-center items-center">
			<div className=" relative">
				<h2 className="text-center">
					Track your learning progress and <br></br> create habits to master{" "}
					<br></br> Portuguese
				</h2>
				<div className="w-40 absolute right-28">
					<PortugueseFlagComponent />
				</div>
			</div>
			<span className="uppercase rotate-3 absolute font-script text-xl w-28 left-0 top-[20%]">
				create your own dictionary
			</span>
			<span className="uppercase rotate-3 absolute font-script text-xl w-28 left-[10%] top-[75%]">
				track daily, weekly and monthly habits
			</span>
			<span className="uppercase rotate-3 absolute font-script text-xl w-28 right-0 top-[10%]">
				save and review articles
			</span>
			<span className="uppercase rotate-3 absolute font-script text-xl w-28 right-[10%] top-[65%]">
				get word of the day in your inbox
			</span>
		</main>
	);
}
