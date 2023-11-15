import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Nanum_Brush_Script } from "@next/font/google";
import { SpacerComponent } from "../components/Spacer";
import Navbar from "../components/NavBar";

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
			<body
				className={`${script.variable} flex h-screen bg-background-primary`}>
				<SpacerComponent className="h-20"></SpacerComponent>
				{children}
			</body>
		</html>
	);
}
