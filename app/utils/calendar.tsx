import dayjs from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";

export default function createCalender(
	currentYear: string,
	currentMonth: string
) {
	dayjs.extend(weekdayPlugin);

	let currentMonthDays = createDaysForCurrentMonth(currentYear, currentMonth);
	let previousMonthDays = createDaysForPreviousMonth(currentYear, currentMonth);
	let nextMonthDays = createDaysForNextMonth(currentYear, currentMonth);

	function getNumberOfDaysInMonth(year: any, month: any) {
		return dayjs(`${year}-${month}-01`).daysInMonth();
	}

	function createDaysForCurrentMonth(year: any, month: any) {
		return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
			return {
				date: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
				dayOfMonth: index + 1,
				isCurrentMonth: true,
				isCompleted: false,
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
			: 6;

		const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays[0].date)
			.subtract(visibleNumberOfDaysFromPreviousMonth, "day")
			.date();

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
					isCompleted: false,
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
				isCompleted: false,
			};
		});
	}

	let days = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];

	return days;
}
