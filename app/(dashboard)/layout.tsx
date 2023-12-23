import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import NavLinks from "./nav-links";
import Graph from "./dashboard/graph";

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const supabase = createServerComponentClient({ cookies });
	const { data } = await supabase.auth.getSession();

	if (data.session) {
		// redirect("/");
	}

	return (
		<main className="relative w-full flex h-screen">
			<section className="min-w-[250px] border-r border-green-400 pt-12">
				<NavLinks />
			</section>
			<section className="flex-1 ">{children}</section>
		</main>
	);
}
