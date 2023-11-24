import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import dayjs from "dayjs";
import { FiBook, FiFlag, FiHome } from "react-icons/fi";
import Graph from "./dashboard/Graph";
import PostItCard from "./dashboard/PostItCard";

export default async function AuthLayout({ children }: { children: any }) {
	const supabase = createServerComponentClient({ cookies });
	const { data } = await supabase.auth.getSession();

	if (data.session) {
		// redirect("/");
	}

	const dailyTasks = [
		"word of the day",
		"read article",
		"situational question",
	];

	const TODAY = dayjs().format("dddd, DD MMM");

	return (
		<main className="relative w-full flex h-screen">
			<section className="min-w-[400px] border-r border-deepOak pt-12 pr-9 space-y-8">
				<div className="flex space-x-3">
					<Link href="/dashboard">
						<FiHome className="text-deepOak hover:text-sepia w-6 h-6 cursor-pointer hover:text-"></FiHome>
					</Link>
					<Link href="/collection">
						<FiBook className="text-deepOak hover:text-sepia w-6 h-6 cursor-pointer"></FiBook>
					</Link>
					<FiFlag className="text-deepOak hover:text-sepia w-6 h-6 cursor-pointer"></FiFlag>
				</div>
				<div className="min-h-[488px] mt-14">
					<Graph />
				</div>
				{/* <PostItCard title="daily checklist" tasks={dailyTasks} /> */}
			</section>
			<section className="flex-1 pt-12 p-9 space-y-6">{children}</section>
		</main>
	);
}
