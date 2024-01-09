import Link from "next/link";
import { AuthUser } from "@supabase/supabase-js";
import { ButtonText, Heading1 } from "../components/texts/texts";
import LogoIcon from "../utils/animated-icon";
import Button from "../components/button";

export default function Navbar({ user }: { user: AuthUser | undefined }) {
	return (
		<nav className="z-50 w-full flex justify-between px-20 py-2 mt-5 rounded-xl m-auto items-center">
			<Heading1 className="uppercase text-2xl">tartaruga</Heading1>
			<div className="space-x-6 flex items-center text-lg ">
			</div>
		</nav>
	);
}
