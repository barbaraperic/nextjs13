import dayjs from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";

export default function createCalender() {
	const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const TODAY = dayjs().format("YYYY-MM-DD");

	dayjs.extend(weekdayPlugin);

	const CURRENT_YEAR = dayjs().format("YYYY");
	const CURRENT_MONTH = dayjs().format("M");

	let currentMonthDays = createDaysForCurrentMonth(CURRENT_YEAR, CURRENT_MONTH);
	let previousMonthDays = createDaysForPreviousMonth(
		CURRENT_YEAR,
		CURRENT_MONTH
	);
	let nextMonthDays = createDaysForNextMonth(CURRENT_YEAR, CURRENT_MONTH);

	console.log(
		"=== currentMonthDays  ===",
		getWeekday(currentMonthDays[0].date)
	);

	function getNumberOfDaysInMonth(year: any, month: any) {
		return dayjs(`${year}-${month}-01`).daysInMonth();
	}

	function createDaysForCurrentMonth(year: any, month: any) {
		return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
			return {
				date: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
				dayOfMonth: index + 1,
				isCurrentMonth: true,
			};
		});
	}

	function getWeekday(date: any) {
		return dayjs(date).weekday();
	}

	function createDaysForPreviousMonth(year: any, month: any) {
		const firstDayOfTheMonth = getWeekday(currentMonthDays[0].date); // 3

		const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month"); // Oct

		const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonth
			? firstDayOfTheMonth - 1
			: 6; // 2

		const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays[0].date)
			.subtract(visibleNumberOfDaysFromPreviousMonth, "day")
			.date();

		console.log(dayjs(currentMonthDays[0].date).subtract(1, "day").date());

		return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
			(day, index) => {
				return {
					date: dayjs(
						`${previousMonth.year()}-${previousMonth.month() + 1}-${
							previousMonthLastMondayDayOfMonth + index
						}`
					).format("YYYY-MM-DD"),
					dayOfMonth: previousMonthLastMondayDayOfMonth + index,
					isCurrentMonth: false,
				};
			}
		);
	}

	function createDaysForNextMonth(year: any, month: any) {
		const lastDayOfTheMonthWeekday = getWeekday(
			`${year}-${month}-${currentMonthDays.length}`
		);
		const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
			? 7 - lastDayOfTheMonthWeekday
			: lastDayOfTheMonthWeekday;

		return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
			return {
				date: dayjs(`${year}-${Number(month) + 1}-${index + 1}`).format(
					"YYYY-MM-DD"
				),
				dayOfMonth: index + 1,
				isCurrentMonth: false,
			};
		});
	}

	let days = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];

	return days;
}
