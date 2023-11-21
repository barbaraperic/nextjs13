import { cookies } from "next/headers";
import { FiSquare } from "react-icons/fi";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Checklist from "./Checklist";

async function getWords() {
	const supabase = createServerComponentClient({ cookies });

	const { data, error } = await supabase.from("words").select();

	if (error) {
		console.log(error.message);
	}

	return data;
}

export default async function Word() {
	const words = await getWords();

	const randomWordIndex = Math.floor(
		Math.random() * (words ? words.length : 1)
	);

	return (
		<div className="relative w-full">
			<section className="relative mb-6 rounded-lg h-60">
				<div className="flex space-x-2 mb-6 items-center">
					<Checklist>
						<h3 className="text-xl ">
							Word of the day:{" "}
							<span className="italic text-lg">
								{words ? words[randomWordIndex].word : null}
							</span>
						</h3>
					</Checklist>
				</div>
				<p className="mb-3">{words ? words[randomWordIndex].context : null}</p>
			</section>
		</div>
	);
}
