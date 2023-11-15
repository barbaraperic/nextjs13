import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/NavBar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Work_Sans, Nanum_Brush_Script, Poppins } from "@next/font/google";

export const metadata: Metadata = {
	title: "Tartaruga",
	description: "Learn Portuguese",
	icons: {
		icon: "./favicon.ico",
	},
};

const display = Work_Sans({
	variable: "--display-font",
	weight: "400",
	preload: false,
});

const body = Poppins({
	variable: "--body-font",
	weight: "400",
	preload: false,
});

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
				className={`${display.variable} ${body.variable} ${script.variable} h-screen bg-background-primary`}>
				<Navbar user={data.data.session?.user} />
				{children}
			</body>
		</html>
	);
}
