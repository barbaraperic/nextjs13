"use client";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";
import { FiCircle } from "react-icons/fi";

async function getWords() {
	const supabase = createServerComponentClient({ cookies });

	const { data, error } = await supabase.from("words").select();

	if (error) {
		console.log(error.message);
	}

	return data;
}

export default function PostItCard({
	title,
	tasks,
}: {
	title: string;
	tasks: string[];
}) {
	const [disabled, setDisabled] = useState(true);

	return (
		<div className="flex flex-col">
			<section className="flex flex-col rounded-md space-y-4 justify-start items-baseline">
				<div className="flex space-x-2 items-center mb-4 ">
					<FiCircle
						className={`w-5 h-5 ${
							disabled ? "cursor-not-allowed" : "cursor-pointer text-sepia"
						}`}
					/>
					<p className="text-lg">{title}</p>
				</div>
				{tasks.map((task) => (
					<div className="w-full items-center relative flex gap-2" key={task}>
						<input
							type="checkbox"
							className="relative rounded-md peer shrink-0 appearance-none h-6 w-6 border border-deepOak"
						/>
						<label className="">{task}</label>
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
					</div>
				))}
			</section>
		</div>
	);
}
