import dayjs from "dayjs";
import createCalender from "../../utils/calendar";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import GraphNav from "./graph-nav";
import { CollectionType } from "@/app/types/types";

export default async function Graph({
	collection,
}: {
	collection: CollectionType[];
}) {
	const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const selectedYear = dayjs().format("YYYY");
	const selectedMonth = dayjs().format("M");

	const collectionDates = collection.map((c) =>
		dayjs(c.createdAt).format("YYYY-MM-DD")
	);

	const DAYS = createCalender(selectedYear, selectedMonth);

	const extendedDays = DAYS.map((day) => {
		if (collectionDates.includes(day.date)) {
			const newDay = { ...day, isCompleted: true };
			return newDay;
		}
		return day;
	});

	return (
		<div className="relative w-full">
			<section className="flex justify-between mb-6">
				{/* <div className="text-xl">today is {TODAY}</div> */}
				{/* <div className="text-xl">
					{date.selectedMonth}-{date.selectedYear}
				</div> */}
				<GraphNav />
			</section>
			<ol id="day-of-week" className="grid grid-cols-7 text-center mb-3">
				{WEEKDAYS.map((day) => (
					<li key={day}>{day}</li>
				))}
			</ol>
			<ol id="date-grid" className="grid grid-cols-7 relative gap-2 ">
				{extendedDays.map((day) => {
					return (
						<div key={day.date}>
							<li
								className={`${
									day.isCurrentMonth ? "text-green-400 border-green-400" : ""
								} ${
									day.isCompleted ? "bg-green-400 text-white" : ""
								} relative hover:shadow-md min-h-[40px] cursor-pointer border p-3`}>
								<span
									className={`flex text-sm justify-center items-center absolute right-1 w-5 h-5"`}>
									{day.dayOfMonth}
								</span>
							</li>
						</div>
					);
				})}
			</ol>
		</div>
	);
}
