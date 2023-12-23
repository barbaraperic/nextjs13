import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import NavLinks from "./nav-links";
import Graph from "./dashboard/Graph";

export default async function AuthLayout({ children }: { children: any }) {
	const supabase = createServerComponentClient({ cookies });
	const { data } = await supabase.auth.getSession();

	if (data.session) {
		// redirect("/");
	}

	return (
		<main className="relative w-full flex h-screen">
			<section className="min-w-[400px] border-r border-text-headline pt-12 pr-9 space-y-8">
				<NavLinks />
				<div className="min-h-[488px] mt-14">
					<Graph />
				</div>
			</section>
			<section className="flex-1 pt-12 p-9 space-y-6">{children}</section>
		</main>
	);
}
