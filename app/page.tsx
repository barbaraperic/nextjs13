import { useState } from "react";
import Link from "next/link";
import BasicModal from "./components/BasicModal";
import { SpacerComponent } from "./components/Spacer";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: Props) {
	const showModal = searchParams?.modal;

	return (
		<main className={`relative`}>
			<SpacerComponent className="h-40"></SpacerComponent>
			<div>
				<div className="flex space-x-10 justify-around">
					<Link
						href="/?modal=true"
						className="py-4 min-w-[260px] bg-black  text-white flex justify-center text-lg rounded-xl cursor">
						Add a new word
					</Link>
					<Link
						href="/convo"
						className="py-4 min-w-[260px] border-2 bg-primary hover:border-black hover:text-black flex justify-center text-lg rounded-xl cursor">
						Practice
					</Link>
				</div>
				{showModal && <BasicModal />}
			</div>
		</main>
	);
}
