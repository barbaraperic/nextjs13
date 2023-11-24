import React from "react";
import Checklist from "./Checklist";
import WordModal from "../collection/WordModal";
import Link from "next/link";

export interface NewsType {
	articles: ArticleType[];
	status: string;
	totalResults: number;
}

export interface ArticleType {
	author: string;
	title: string;
	url: string;
}

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

async function getArticles() {
	return fetch(
		`https:newsapi.org/v2/top-headlines?country=pt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
	)
		.then((res) => res.json())
		.then((data) => {
			const news = data.articles.slice(0, 2);
			return news;
		});
}

export default async function Article({ searchParams }: Props) {
	const articles = await getArticles();
	const showWordModal = searchParams?.wordModal;

	return (
		<>
			<div className="flex space-x-2 mb-6 items-center">
				<Checklist id="article">
					<h3 className="text-xl ">Article of the day</h3>
				</Checklist>
			</div>
			<div className="space-y-6">
				<ul className="space-y-2">
					{articles.map((article: ArticleType, index: number) => (
						<li key={index}>
							<a target="_blank" className="underline" href={article.url}>
								{article.title}
							</a>
						</li>
					))}
				</ul>
				<Link
					href="dashboard/?wordModal=true"
					className="max-w-[200px] flex justify-center border border-deepOak hover:text-sepia hover:border-sepia px-7 py-3 rounded-lg">
					Add a new word
				</Link>
			</div>
			{showWordModal && <WordModal />}
		</>
	);
}
