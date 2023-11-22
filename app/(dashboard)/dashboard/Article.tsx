import React from "react";
import Checklist from "./Checklist";

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

async function getArticles() {
	return fetch(
		`https:newsapi.org/v2/top-headlines?country=pt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
	)
		.then((res) => res.json())
		.then((data) => {
			const news = data.articles.slice(0, 1);
			return news;
		});
}

export default async function Article() {
	const articles = await getArticles();

	return (
		<>
			<div className="flex space-x-2 mb-6 items-center">
				<Checklist id="article">
					<h3 className="text-xl ">Article of the day</h3>
				</Checklist>
			</div>
			<ul className="space-y-2">
				{articles.map((article: ArticleType, index: number) => (
					<li key={index}>
						<a href={article.url}>{article.title}</a>
					</li>
				))}
			</ul>
		</>
	);
}
