"use client";

import dayjs from "dayjs";

export default function Graph() {
	const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const TODAY = dayjs().format("YYYY-MM-DD");

	const INITIAL_YEAR = dayjs().format("YYYY");
	const INITIAL_MONTH = dayjs().format("M");

	return (
		<div className="relative border p-3 p-6">
			<section className="flex justify-between mb-6">
				<div className="text-xl">{TODAY}</div>

				<div className="flex space-x-4">
					<span id="previous-month-selector">back</span>
					<span id="present-month-selector">today</span>
					<span id="next-month-selector">next</span>
				</div>
			</section>

			<ol id="day-of-week" className="grid grid-cols-7 text-center mb-3">
				<li>Mon</li>
				<li>Tue</li>
				<li>Wed</li>
				<li>Thu</li>
				<li>Fri</li>
				<li>Sat</li>
				<li>Sun</li>
			</ol>

			<ol id="date-grid" className="grid grid-cols-7 relative gap-2 ">
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						1
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						2
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						3
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						4
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						5
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						6
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						7
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						8
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						9
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						10
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						11
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						12
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						13
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						14
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						15
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						16
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						17
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						18
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						19
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						20
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						21
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						22
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						23
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						24
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						25
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						26
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						27
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						28
					</span>
				</li>
				<li className="relative min-h-[60px] border p-3">
					<span className="flex justify-center items-center absolute right-1 w-5 h-5">
						29
					</span>
				</li>
			</ol>
		</div>
	);
}
