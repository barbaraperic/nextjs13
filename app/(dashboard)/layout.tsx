import NavLinks from "./nav-links";

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<div className="h-screen w-screen relative">
			<aside className="absolute pt-[60px] top-0 left-0 h-full border-r border-black/10 w-[200px]"><NavLinks /></aside>
			<div className="ml-[200px] h-full">
				<header className="h-[60px] border-b border-black/10">
					<div className="h-full w-full px-6 flex items-center justify-end">
					</div>
				</header>
			</div>
			<div className="h-[calc(100vh-60px)]">{children}</div>
		</div>
	);
}


