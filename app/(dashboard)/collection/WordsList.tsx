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
		<div className="flex flex-col w-full relative rounded-md">
			{words?.map((word: WordType) => (
				<Link href={`/collection/${word.id}`} key={word.id}>
					<div
						className={`py-5 px-14 cursor-pointer flex justify-between items-center text-deepOak transition-all`}>
						<p className="">
							{word.word} - {word.translation}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
}
