import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Nanum_Brush_Script } from "@next/font/google";
import Navbar from "../components/NavBar";
import Link from "next/link";
import SpacerComponent from "../components/Spacer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tartaruga",
	description: "Learn Portuguese",
	icons: {
		icon: "./favicon.ico",
	},
};

const script = Nanum_Brush_Script({
	variable: "--script-font",
	weight: "400",
	preload: false,
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = cookies();
	const supabase = createServerComponentClient({ cookies: () => cookieStore });
	const data = await supabase.auth.getSession();

	// if (!data.data.session) {
	// 	redirect("/login");
	// }

	return (
		<html lang="en">
			<body className={`${script.variable}`}>
				<SpacerComponent size="medium"></SpacerComponent>
				<Link href="/" className="text-text-highlight text-2xl">
					tartaruga
				</Link>
				{children}
			</body>
		</html>
	);
}
