import Link from "next/link";
import { AuthUser } from "@supabase/supabase-js";
import { ButtonText } from "../components/texts/Texts";

export default function Navbar({ user }: { user: AuthUser | undefined }) {
	return (
		<nav className="flex justify-between px-20 py-2 w-[90%] mt-5 rounded-3xl m-auto items-center bg-eagle text-sapphire">
			<h1 className="tracking-wide font-semibold">tartaruga</h1>
			<div className="space-x-6 flex items-center text-lg ">
				{user && (
					<span className="underline hover:no-underline">
						hello, {user.email}
					</span>
				)}
				<button className="hover:underline">
					<p>collection</p>
				</button>
				<button className="hover:underline">
					<ButtonText>sign up</ButtonText>
				</button>
			</div>
		</nav>
	);
}
