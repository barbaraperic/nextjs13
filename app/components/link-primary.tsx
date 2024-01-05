import Link from "next/link";

export default function LinkPrimary({
	children,
	className,
	href,
}: {
	children: React.ReactNode;
	className?: string;
	href: string;
}) {
	return (
		<Link
			href={href}
			className={`py-4 px-6 bg-green-300 hover:bg-green-400 text-white max-w-[260px] transition-all ease-in-out font-bold hover:shadow-md flex justify-center text-lg cursor ${className}`}>
			{children}
		</Link>
	);
}
