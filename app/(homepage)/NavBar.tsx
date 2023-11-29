import Link from "next/link";
import { AuthUser } from "@supabase/supabase-js";
import { ButtonText } from "../components/texts/Texts";
import LogoIcon from "../utils/eggIcon";

export default function Navbar({ user }: { user: AuthUser | undefined }) {
	return (
		<nav className="z-50 w-full flex justify-between px-20 py-2 mt-5 rounded-xl m-auto items-center text-deepOak">
			<h1 className="font-bold">tartaruga</h1>
			<div className="space-x-6 flex items-center text-lg ">
				{user && (
					<span className="underline hover:no-underline">
						hello, {user.email}
					</span>
				)}
				<Link href={"/collection"} className="hover:underline">
					<p>collection</p>
				</Link>
				<Link className="hover:underline" href={"/signup"}>
					<ButtonText>sign up</ButtonText>
				</Link>
			</div>
		</nav>
	);
}
