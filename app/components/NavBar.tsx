import Link from "next/link";
import Image from "next/image";
import Logo from "./peacock.png";

export default function Navbar() {
	return (
		<nav className="flex items-center nav">
			<Image
				src={Logo}
				alt="Novas Palavras logo"
				width={200}
				placeholder="blur"
				quality={100}
			/>
			<div className="space-x-6 flex flex-1">
				<h1>Novas Palavras</h1>
				<Link href="/">Index</Link>
				<Link href="/words">Words</Link>
				<Link href="/convo">Conversations</Link>
			</div>
		</nav>
	);
}
