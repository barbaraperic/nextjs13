export default function ButtonPrimary({
	children,
	onClick,
	className,
	disabled,
	type,
	...props
}: {
	children: any;
	onClick?: (e: any) => Promise<void>;
	className?: string;
	disabled?: boolean;
	type: "submit";
}) {
	return (
		<button
			type={type}
			className={`py-4 border-deepOak border hover:border-sepia hover:text-sepia min-w-[260px] text-deepOak rounded-lg font-bold ${className}`}
			onClick={onClick}
			disabled={disabled}
			{...props}>
			{children}
		</button>
	);
}
