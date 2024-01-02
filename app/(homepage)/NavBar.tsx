import Link from "next/link";
import { AuthUser } from "@supabase/supabase-js";
import { ButtonText, Heading1 } from "../components/texts/Texts";
import LogoIcon from "../utils/animated-icon";
import Button from "../components/Button";

export default function Navbar({ user }: { user: AuthUser | undefined }) {
	return (
		<nav className="z-50 w-full flex justify-between px-20 py-2 mt-5 rounded-xl m-auto items-center">
			<Heading1>tartaruga</Heading1>
			<div className="space-x-6 flex items-center text-lg ">
				{user && (
					<>
						<span className="underline hover:no-underline">
							hello, {user.email}
						</span>
						<Link className="hover:underline" href={"/dashboard"}>
							<Button>Dashboard</Button>
						</Link>
					</>
				)}
				<Link className="hover:underline" href={"/signup"}>
					<Button intent="secondary">Sign up</Button>
				</Link>
			</div>
		</nav>
	);
}
