export default function ButtonPrimary({
	children,
	onClick,
	className,
	disabled,
}: {
	children: any;
	onClick: (e: any) => Promise<void>;
	className?: string;
	disabled?: boolean;
}) {
	return (
		<button
			className={`py-4 border-deepOak border hover:border-sepia hover:text-sepia min-w-[260px] text-deepOak rounded-lg font-bold ${className}`}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	);
}
