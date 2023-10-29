"use client";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const commitsArray = Array.from({ length: 20 }, (_, index) => {
	const date = new Date();
	date.setDate(index + 1);

	return {
		commits: 0,
		month: months[date.getMonth()],
	};
});

console.log("=== commitsArray Graph.tsx [30] ===", commitsArray);

export default function Graph() {
	return (
		<div className="inline-grid w-full grid-cols-[10%_90%] grid-rows-2 gap-2">
			<ul id="empty"></ul>
			<ul className="grid grid-cols-12" id="months">
				<p>Jan</p>
				<p>Feb</p>
				<p>Mar</p>
				<p>Apr</p>
				<p>May</p>
				<p>Jun</p>
				<p>Jul</p>
				<p>Aug</p>
				<p>Sep</p>
				<p>Oct</p>
				<p>Nov</p>
				<p>Dec</p>
			</ul>
			<ul className="grid grid-row-[repeat(7,_minmax(0,_1fr))]" id="days">
				<p>Mon</p>
				<p></p>
				<p>Wed</p>
				<p></p>
				<p>Fri</p>
				<p></p>
				<p></p>
			</ul>
			<ul className="grid grid-col-12" id="squares">
				<p>Jan</p>
				<p>Feb</p>
				<p>Mar</p>
				<p>Apr</p>
				<p>May</p>
				<p>Jun</p>
				<p>Jul</p>
				<p>Aug</p>
				<p>Sep</p>
				<p>Oct</p>
				<p>Nov</p>
				<p>Dec</p>
			</ul>
		</div>
	);
}
