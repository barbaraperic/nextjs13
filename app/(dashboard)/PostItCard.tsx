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
						className="flex space-x-4 w-full items-center relative"
						key={task}>
						<input type="checkbox" className="absolute opacity-0 h-0 w-0" />
						<span className="absolute h-5 w-5 border-2 border-mediumGray rounded-sm"></span>
						<label className="font-script text-3xl pl-8">{task}</label>
					</div>
				))}
			</section>
		</div>
	);
}
