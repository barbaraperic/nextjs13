import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex border-r-2 p-2">
			<div className="flex-col flex flex-1 divide-y-2 space-y-2 ">
				<div>
					<Link href="/">Index</Link>
				</div>
				<div>
					<Link href="/words">Words</Link>
				</div>
				<div>
					<Link href="/convo">Conversations</Link>
				</div>
			</div>
		</nav>
	);
}
