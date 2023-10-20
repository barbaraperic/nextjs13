import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import DeleteButton from "./DeleteButton";

async function getWord(id: string) {
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase.from("words").select().eq("id", id).single();

	if (!data) {
		notFound();
	}

	return data;
}

export default async function WordDetails({ params }: { params: any }) {
	const word = await getWord(params.id);

	return (
		<main>
			<nav>
				<h2>Word Details</h2>
			</nav>
			<div>{word.translation}</div>
			<DeleteButton id={word.id} />
		</main>
	);
}
