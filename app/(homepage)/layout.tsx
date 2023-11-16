import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default async function AuthLayout({ children }: { children: any }) {
	const supabase = createServerComponentClient({ cookies });
	const { data } = await supabase.auth.getSession();

	if (data.session) {
		// redirect("/");
	}

	return (
		<>
			<Navbar user={data.session?.user} />
			{children}
			<Footer />
		</>
	);
}
