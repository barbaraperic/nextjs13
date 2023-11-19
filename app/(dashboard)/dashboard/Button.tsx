export default function ButtonOutline({
	children,
	className,
}: {
	children: any;
	className: string;
}) {
	return (
		<button
			className={`border border-deepOak hover:text-sepia hover:border-sepia px-7 py-3 rounded-lg ${className}`}>
			{children}
		</button>
	);
}
