import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import PortugueseFlagComponent from "../components/icons/portugueseFlag";
import HexigramIconComponent from "../components/icons/hexigramIcon";
import { SpacerComponent } from "../components/Spacer";
import SubscribeForm from "./SubscriptionForm";
import Footer from "./Footer";
import ButtonPrimary from "../components/ButtonPrimary";
import Link from "next/link";
import SubscriptionModal from "./SubscriptionModal";
import { FiCoffee } from "react-icons/fi";
import EggIcon from "../utils/eggIcon";

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export default function Homepage({ searchParams }: Props) {
	const showSubscriptionModal = searchParams?.subscriptionModal;

	return (
		<main className="h-full w-full flex flex-col flex-1 relative justify-between">
			<section className="relative min-h-[500px] flex justify-center items-center">
				<div className="relative">
					{/* <FiCoffee className="h-10 w-10" /> */}
					<EggIcon></EggIcon>

					{/* <h2 className="text-center">
						track your learning progress and <br></br> create habits to master{" "}
						<br></br> <i>a língua portuguesa</i>
					</h2> */}
				</div>
				{/* <span className="uppercase rotate-3 absolute font-script text-xl w-28 left-0 top-[20%]">
					create your own dictionary
				</span>
				<span className="uppercase rotate-3 absolute font-script text-xl w-28 left-[10%] top-[80%]">
					track daily, weekly and monthly habits
				</span>
				<span className="uppercase rotate-3 absolute font-script text-xl w-28 right-0 top-[10%]">
					save and review articles
				</span>
				<span className="uppercase rotate-3 absolute font-script text-xl w-28 right-[10%] top-[87%]">
					get word of the day in your inbox
				</span> */}
			</section>
			<SpacerComponent className="h-20"></SpacerComponent>
			{/* <Link
				href="/?subscriptionModal=true"
				className="py-4 w-[360px] text-xl m-auto bg-sapphire font-script text-white flex justify-center uppercase rounded-xl cursor">
				Get word of the day in your inbox
			</Link>
			{showSubscriptionModal && <SubscriptionModal></SubscriptionModal>} */}
		</main>
	);
}
