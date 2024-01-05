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
			className={`py-4 px-6 max-w-[260px] transition-all ease-in-out shadow font-bold hover:shadow-xl flex justify-center text-lg rounded-xl cursor ${className}`}>
			{children}
		</Link>
	);
}
