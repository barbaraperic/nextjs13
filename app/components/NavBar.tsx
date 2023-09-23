import Link from "next/link";
import { SpacerComponent } from "./Spacer";
import TurtleIconComponent from "./icons/turtleIcon";

export default function Navbar() {
	return (
		<nav className="flex border-r border-black">
			<div className="flex-col flex flex-1">
				<SpacerComponent className="h-6"></SpacerComponent>
				<Link className="cursor" href="/">
					<h1 className="uppercase font-thin px-9 relative">Tartaruga</h1>
				</Link>
				<TurtleIconComponent className="h-7  absolute top-[99px] left-[251px]"></TurtleIconComponent>
				<SpacerComponent className="h-20"></SpacerComponent>
				<div className="border-t border-b border-black px-4 py-7 flex justify-center">
					<Link className="text-2xl hover:text-primary" href="/words">
						library
					</Link>
				</div>
			</div>
		</nav>
	);
}
