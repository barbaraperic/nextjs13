"use client";

import Link from "next/link";
import useStore from "./store";
import { capitalize } from "@/app/utils/capitalize";

export interface WordType {
	id: string;
	word: string;
	translation: string;
	context: string;
}

export default function WordList({ words }: { words: WordType[] | undefined }) {
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
		<div className="min-h-[600px] flex flex-col justify-between">
			<div>
				{words
					?.slice(currentSliceStart, currentSliceEnd)
					.map((word: WordType) => (
						<div key={word.id}>
							<Link href={`/collection/${word.id}`}>
								<div
									className={`py-5 cursor-pointer flex justify-between items-center transition-all`}>
									<p className="text-xl">{capitalize(word.word)}</p>
								</div>
								<div className="flex flex-col space-y-2">
									<div className="flex flex-col space-y-1">
										<span className="uppercase font-bold text-xs text-text-highlight">
											Translation
										</span>
										<p>{capitalize(word.translation)}</p>
									</div>
									{word.context && (
										<div className="flex flex-col space-y-1">
											<span className="uppercase font-bold text-xs text-text-highlight">
												Example
											</span>
											<p className="italic">{capitalize(word.context)}</p>
										</div>
									)}
								</div>
							</Link>
						</div>
					))}
			</div>
			{currentSliceStart >= wordsPerPage && (
				<div className="flex items-center space-x-2 justify-center">
					{pages.map((pageNumber) => (
						<>
							<button
								className={`${
									pageNumber === currentPage + 1 ? "text-text-highlight" : ""
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
									pageNumber === currentPage + 1 ? "text-text-highlight" : ""
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
