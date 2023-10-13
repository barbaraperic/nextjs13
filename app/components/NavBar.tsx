import Link from "next/link";
import { SpacerComponent } from "./Spacer";
import TurtleIconComponent from "./icons/turtleIcon";
import LogoutButton from "./LogoutButton";
import { AuthUser } from "@supabase/supabase-js";
import { ButtonText } from "./texts/Texts";

export default function Navbar({ user }: { user: AuthUser | undefined }) {
	return (
		<nav className="flex justify-between px-20 py-2 items-center bg-black text-white">
			<Link href={"/"}>
				<h1 className="rotate-2 tracking-wide">tartaruga</h1>
			</Link>
			<div className="space-x-3">
				<button>
					<ButtonText>Log out</ButtonText>
				</button>
				{user && <span>Hello, {user.email}</span>}
			</div>
		</nav>
	);
}
