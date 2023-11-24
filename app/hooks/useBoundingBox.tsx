"use client";

import React from "react";

function useBoundingBox(ref, scrollDebounce = 60, resizeDebounce = 60) {
	const [box, setBox] = React.useState(null);

	React.useEffect(() => {
		if (!ref.current) {
			return;
		}

		// Wait a sec before calculating the initial value.
		window.setTimeout(() => {
			if (ref.current) {
				setBox(ref.current.getBoundingClientRect());
			}
		}, 200);

		const resizeObserver = new ResizeObserver((entries) => {
			const [entry] = entries;

			setBox(entry.contentRect);
		});

		function recalculate() {
			setBox(ref.current.getBoundingClientRect());
		}

		const handleScroll = scrollDebounce
			? debounce(recalculate, scrollDebounce)
			: recalculate;

		const handleResize = resizeDebounce
			? debounce(recalculate, resizeDebounce)
			: recalculate;

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		resizeObserver.observe(ref.current);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
			resizeObserver.disconnect();
		};
	}, [ref, scrollDebounce, resizeDebounce]);

	return box;
}

export default useBoundingBox;

function debounce<T extends (...args: any[]) => void>(
	func: T,
	delay: number
): (...args: Parameters<T>) => void {
	let timeoutId: NodeJS.Timeout;

	return function (...args: Parameters<T>): void {
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);
	};
}
