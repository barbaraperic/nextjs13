import React, { useEffect, useState } from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

export interface WordType {
	id: string;
	word: string;
	translation: string;
	context: string;
}

async function getWords() {
	const supabase = createServerComponentClient({ cookies });

	const { data, error } = await supabase.from("words").select();

	if (error) {
		console.log(error.message);
	}

	return data;
}

export default async function WordsList() {
	const words = await getWords();

	return (
		<>
			<div className="flex flex-col w-full relative border-dark border rounded-md">
				{words?.map((word: WordType) => (
					<Link href={`/words/${word.id}`} key={word.id}>
						<div
							className={`py-5 px-14 cursor-pointer flex justify-between items-center text-dark hover:bg-mediumGray transition-all  border-b last:border-0 border-dark`}>
							<p className="font-script text-4xl">
								{word.word} - {word.translation}
							</p>
						</div>
					</Link>
				))}
				<div className="border-red border-l border-r absolute w-2 h-full left-6"></div>
			</div>
		</>
	);
}
