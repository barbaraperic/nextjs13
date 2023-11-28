import React, { useEffect, useState } from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import WordList from "./WordList";

async function getWords() {
	const supabase = createServerComponentClient({ cookies });

	const { data, error } = await supabase.from("words").select();

	if (error) {
		console.log(error.message);
	}

	return data;
}

export default async function WordCollection() {
	const words = await getWords();

	return (
		<div className="flex flex-col w-full relative rounded-md">
			<WordList words={words}></WordList>
		</div>
	);
}
