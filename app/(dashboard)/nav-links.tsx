 "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBook, FiHome, FiClipboard } from "react-icons/fi";
import clsx from "clsx";
import { Paragraph } from "../components/texts/texts";

export default function NavLinks() {
	const pathname = usePathname();

	const links = [
		{
			name: "Dashboard",
			href: "/dashboard",
			icon: FiHome,
		},
		{
			name: "Collection",
			href: "/collection",
			icon: FiBook,
		},
		{
			name: "Statistics",
			href: "/statistics",
			icon: FiClipboard,
		},
	];

	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							"flex h-[48px] grow items-center justify-center gap-2 bg-snow-50 p-3 text-sm font-medium hover:bg-snow-100 hover:text-green-300 md:flex-none md:justify-start md:p-2 md:px-3",
							{
								"bg-snow-100 text-green-300": pathname === link.href,
							}
						)}>
						<LinkIcon className="w-6 h-6" />
						<Paragraph className="hidden md:block">{link.name}</Paragraph>
					</Link>
				);
			})}
		</>
	);
}
