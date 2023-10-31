"use client";

import dayjs from "dayjs";

export default function Graph() {
	const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const TODAY = dayjs().format("YYYY-MM-DD");

	const INITIAL_YEAR = dayjs().format("YYYY");
	const INITIAL_MONTH = dayjs().format("M");

	return (
		<div className="relative border">
			<section className="flex justify-between p-3">
				<div id="selected-month" className="text-xl">
					{TODAY}
				</div>

				<div className="flex items-center justify-between w-20">
					<span id="previous-month-selector">prev</span>
					<span id="present-month-selector">Today</span>
					<span id="next-month-selector">next</span>
				</div>
			</section>

			<ol id="days-of-week" className="grid grid-cols-7">
				<li>Mon</li>
				<li>Tue</li>
				<li>Wed</li>
				<li>Thu</li>
				<li>Fri</li>
				<li>Sat</li>
				<li>Sun</li>
			</ol>

			<ol id="calendar-days" className="dateGrid">
				<li className="relative">
					<span className="flex justify-center items-center absolute">1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
					<span>5</span>
					<span>6</span>
					<span>7</span>
					<span>8</span>
					<span>9</span>
					<span>10</span>
					<span>11</span>
					<span>12</span>
					<span>13</span>
					<span>14</span>
					<span>15</span>
					<span>16</span>
					<span>17</span>
					<span>18</span>
					<span>19</span>
					<span>20</span>
					<span>21</span>
					<span>22</span>
					<span>23</span>
					<span>24</span>
					<span>25</span>
					<span>26</span>
					<span>27</span>
					<span>28</span>
					<span>29</span>
				</li>
			</ol>
		</div>
	);
}
