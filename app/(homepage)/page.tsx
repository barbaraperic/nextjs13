import Image from "next/image";
import Button from "../components/Button";
import { Heading2 } from "../components/texts/Texts";
import Tartaruga from "../components/illustrations/Tartaruga.png";
import SpacerComponent from "../components/Spacer";
import Link from "next/link";

export default function Homepage() {
	return (
		<main className="h-full w-full grid grid-cols-2 px-20">
			<section className="flex flex-col space-y-10 justify-center items-start">
				<Heading2 className="text-7xl">
					Empower your <br />
					language journey
				</Heading2>
				<Button intent="primary">
					<Link href="/dashboard"> Start now</Link>
				</Button>
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
