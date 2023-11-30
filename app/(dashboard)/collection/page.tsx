import ResourceList from "./ResourceList";
import ResourceModal from "./ResourceModal";
import WordModal from "./WordModal";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import WordList from "./WordList";
import LinkPrimary from "@/app/components/LinkPrimary";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

async function getWords() {
	const supabase = createServerComponentClient({ cookies });

	const { data, error } = await supabase.from("words").select();

	if (error) {
		console.log(error.message);
	}

	return data;
}

export default async function CollectionPage({ searchParams }: Props) {
	const showResourceModal = searchParams?.resourceModal;
	const showWordModal = searchParams?.wordModal;
	const words = await getWords();

	return (
		<main className=" h-full flex flex-col justify-between">
			<section className="space-y-4">
				<h2>Words</h2>
				<WordList words={words?.reverse()} />
			</section>

			<LinkPrimary href={"/collection/?wordModal=true"}>
				add a new word
			</LinkPrimary>

			{showWordModal && <WordModal />}
			{showResourceModal && <ResourceModal />}
		</main>
	);
}
