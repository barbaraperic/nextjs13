import Image from "next/image";
import { Heading2, Paragraph } from "../components/texts/texts";
import Tartaruga from "../components/illustrations/Tartaruga.png";
import SpacerComponent from "../components/spacer";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Homepage() {
	return (
		<main className="h-full w-full grid grid-cols-2 px-20">
			<section className="flex flex-col space-y-10 justify-center items-start">
				<Heading2 className="text-7xl">
					Empower your <br />
					language journey
				</Heading2>
				<Link
					href="/dashboard"
					className="flex items-center justify-center space-x-5 group transition-all duration-200">
					<Paragraph>Go to the dashboard</Paragraph>
					<FiArrowRight className="w-6 h-6 transition-transform transform group-hover:translate-x-1.5" />
				</Link>
				<SpacerComponent size="medium"></SpacerComponent>
			</section>
			<section className="flex justify-end items-center">
				<Image
					className="hover:scale-105 transition duration-200 hover:rotate-3"
					src={Tartaruga}
					width={500}
					height={500}
					priority
					alt="Picture of a turtle with a square background"
				/>
			</section>
		</main>
	);
}
