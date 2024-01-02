"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function GraphNav() {
	// const TODAY = dayjs().format("DD MMMM - dddd");
	const [date, setDate] = useState({
		selectedYear: dayjs().format("YYYY"),
		selectedMonth: dayjs().format("M"),
	});

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
		<div className="flex space-x-4 items-center">
			<button id="previous-month-selector" onClick={handlePreviousMonth}>
				<FiChevronLeft className="w-4 h-4" />
			</button>
			<button id="present-month-selector" onClick={handleToday}>
				today
			</button>
			<button
				id="next-month-selector"
				disabled={isCurrentMonth}
				onClick={handleNextMonth}>
				<FiChevronRight
					className={`w-4 h-4 ${isCurrentMonth ? "cursor-not-allowed" : ""}`}
				/>
			</button>
		</div>
	);
}
