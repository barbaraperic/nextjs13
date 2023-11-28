"use client";

import Link from "next/link";
import useStore from "./store";

export interface WordType {
	id: string;
	word: string;
	translation: string;
	context: string;
}

export default function WordList({ words }: { words: WordType[] | null }) {
	const {
		wordsPerPage,
		currentSliceStart,
		currentSliceEnd,
		increaseSliceEnd,
		increaseSliceStart,
		reduceSliceEnd,
		reduceSliceStart,
		currentPage,
		nextPage,
		previousPage,
	} = useStore((state: any) => state);

	function handleNextPage() {
		increaseSliceStart();
		increaseSliceEnd();
		nextPage();
	}

	function handlePreviousPage() {
		reduceSliceStart();
		reduceSliceEnd();
		previousPage();
	}

	const wordsLength = (words && words.length) || 0;

	const pageCount = Math.ceil(wordsLength / wordsPerPage);

	const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

	return (
		<div className="min-h-[500px] flex flex-col justify-between">
			<div>
				{words
					?.slice(currentSliceStart, currentSliceEnd)
					.map((word: WordType) => (
						<Link href={`/collection/${word.id}`} key={word.id}>
							<div
								className={`py-5 cursor-pointer flex justify-between items-center text-deepOak transition-all`}>
								<p className="">
									{word.word} - {word.translation}
								</p>
							</div>
						</Link>
					))}
			</div>
			{currentSliceStart >= wordsPerPage && (
				<div className="flex items-center space-x-2 justify-center">
					{pages.map((pageNumber) => (
						<>
							<button
								className={`${
									pageNumber === currentPage + 1 ? "text-emmerald" : ""
								}`}
								onClick={handlePreviousPage}>
								{pageNumber}
							</button>
						</>
					))}
				</div>
			)}
			{currentSliceEnd < wordsLength && (
				<div className="flex items-center space-x-2 justify-center">
					{pages.map((pageNumber) => (
						<>
							<button
								className={`${
									pageNumber === currentPage + 1 ? "text-emmerald" : ""
								}`}
								onClick={handleNextPage}>
								{pageNumber}
							</button>
						</>
					))}
				</div>
			)}
		</div>
	);
}
