"use client";

export default function Graph() {
	return (
		<div className="inline-grid grid-cols-2 grid-rows-2 gap-2">
			<ul className="grid grid-cols-12"></ul>
			<ul className="days"></ul>
			<ul className="squares"></ul>
		</div>
	);
}
