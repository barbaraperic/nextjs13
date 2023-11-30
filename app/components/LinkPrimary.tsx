import Link from "next/link";

export default function LinkPrimary({
	children,
	className,
	href,
}: {
	children: any;
	className?: string;
	href: string;
}) {
	return (
		<Link
			href={href}
			className={`py-4 max-w-[260px] transition-all ease-in-out shadow font-bold bg-text-highlight text-text-tertiary hover:shadow-xl flex justify-center text-lg rounded-xl cursor ${className}`}>
			{children}
		</Link>
	);
}
