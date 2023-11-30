import "./globals.css";
import type { Metadata } from "next";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Mulish, PT_Sans_Narrow, Poppins } from "@next/font/google";

export const metadata: Metadata = {
	title: "Tartaruga",
	description: "Learn Portuguese",
	icons: {
		icon: "./favicon.ico",
	},
};

const headings = Mulish({
	variable: "--headings-font",
	weight: "400",
	preload: false,
});

const body = Mulish({
	variable: "--body-font",
	weight: "400",
	preload: false,
});

const script = PT_Sans_Narrow({
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
				className={`${headings.variable} ${body.variable} ${script.variable} bg-background-main`}>
				{children}
			</body>
		</html>
	);
}
