"use client";

export default function PostItCard({
	title,
	tasks,
}: {
	title: string;
	tasks: string[];
}) {
	return (
		<div className="flex flex-col items-center">
			<section className="bg-gradient-to-br rotate-3 from-yellow to-lightYellow flex flex-col shadow-2xl p-5 rounded-md space-y-4 h-[300px] w-[300px] justify-center items-center">
				<p className="mb-4 text-lg">{title}</p>
				{tasks.map((task) => (
					<div
						className="space-x-4 w-full items-center relative flex gap-2"
						key={task}>
						<input
							type="checkbox"
							className="ml-3 relative peer shrink-0 appearance-none h-5 w-5 border-2 border-mediumGray rounded-sm  checked:border-0"
						/>
						<label className="font-script text-3xl">{task}</label>
						<svg
							className="absolute w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
					</div>
				))}
			</section>
		</div>
	);
}
