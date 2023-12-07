"use client";
import dayjs from "dayjs";
import createCalender from "../../utils/calendar";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import useStore from "./store";

export default function Graph() {
	const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	// const TODAY = dayjs().format("DD MMMM - dddd");
	const [date, setDate] = useState({
		selectedYear: dayjs().format("YYYY"),
		selectedMonth: dayjs().format("M"),
	});
	const [data, setData] = useState<string[] | undefined>([]);
	const dailyTasks = useStore((state: any) => state.dailyTasks);

	useEffect(() => {
		const fetchTasks = async () => {
			const supabase = createClientComponentClient();

			// get data only for the month
			const { data } = await supabase.from("daily_tasks").select();
			const dailyTasksCompletedDate = data?.map((task) =>
				new Date(task.date).toUTCString()
			);
			setData(dailyTasksCompletedDate);
		};

		fetchTasks();
	}, []);

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
						<FiChevronLeft className="text-text-headline w-4 h-4" />
					</button>
					<button id="present-month-selector" onClick={handleToday}>
						today
					</button>
					<button
						id="next-month-selector"
						disabled={isCurrentMonth}
						onClick={handleNextMonth}>
						<FiChevronRight
							className={`text-text-headline w-4 h-4 ${
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
										? "text-text-highlight border-text-highlight"
										: ""
								} relative hover:shadow-md min-h-[60px] cursor-pointer border rounded-lg p-3 ${
									data?.includes(new Date(day.date).toUTCString())
										? "bg-text-highlight text-text-tertiary font-bold"
										: ""
								} ${
									day.date === dayjs().format("YYYY-MM-DD")
										? "font-extrabold border-2"
										: ""
								} `}>
								<span
									className={`flex justify-center items-center absolute right-1 w-5 h-5"`}>
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
