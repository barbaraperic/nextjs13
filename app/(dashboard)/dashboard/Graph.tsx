"use client";
import dayjs from "dayjs";
import createCalender from "../../utils/calendar";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Graph() {
	const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const TODAY = dayjs().format("DD MMMM - dddd");
	const [date, setDate] = useState({
		selectedYear: dayjs().format("YYYY"),
		selectedMonth: dayjs().format("M"),
	});

	const { selectedYear, selectedMonth } = date;

	const DAYS = createCalender(selectedYear, selectedMonth);

	function handlePreviousMonth() {
		const newDate = dayjs(
			date.selectedYear + "-" + date.selectedMonth + "-01"
		).subtract(1, "month");
		setDate({
			selectedYear: newDate.format("YYYY"),
			selectedMonth: newDate.format("M"),
		});
	}

	const isCurrentMonth =
		date.selectedMonth === dayjs().format("M") &&
		date.selectedYear === dayjs().format("YYYY");

	function handleNextMonth() {
		if (isCurrentMonth) {
			return;
		}
		const newDate = dayjs(
			date.selectedYear + "-" + date.selectedMonth + "-01"
		).add(1, "month");

		setDate({
			selectedYear: newDate.format("YYYY"),
			selectedMonth: newDate.format("M"),
		});
	}

	function handleToday() {
		setDate({
			selectedYear: dayjs().format("YYYY"),
			selectedMonth: dayjs().format("M"),
		});
	}

	return (
		<div className="relative w-full">
			<section className="flex justify-between mb-6">
				{/* <div className="text-xl">today is {TODAY}</div> */}
				<div className="text-xl">
					{date.selectedMonth}-{date.selectedYear}
				</div>
				<div className="flex space-x-4 items-center">
					<button id="previous-month-selector" onClick={handlePreviousMonth}>
						<FiChevronLeft className="text-deepOak w-4 h-4" />
					</button>
					<button id="present-month-selector" onClick={handleToday}>
						today
					</button>
					<button
						id="next-month-selector"
						disabled={isCurrentMonth}
						onClick={handleNextMonth}>
						<FiChevronRight
							className={`text-deepOak w-4 h-4 ${
								isCurrentMonth ? "cursor-not-allowed" : ""
							}`}
						/>
					</button>
				</div>
			</section>
			<ol id="day-of-week" className="grid curs grid-cols-7 text-center mb-3">
				{WEEKDAYS.map((day) => (
					<li key={day}>{day}</li>
				))}
			</ol>
			<ol id="date-grid" className="grid grid-cols-7 relative gap-2 ">
				{DAYS.map((day) => {
					return (
						<div key={day.date}>
							<li
								className={`${
									day.isCurrentMonth
										? ""
										: "border text-emmerald border-emmerald"
								} relative min-h-[60px] border rounded-lg p-3  ${
									day.date === dayjs().format("YYYY-MM-DD")
										? " bg-emmerald text-white font-bold shadow-md"
										: ""
								} `}>
								<span
									className={` flex justify-center items-center absolute right-1 w-5 h-5"`}>
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
