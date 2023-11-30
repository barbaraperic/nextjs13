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
	type?: "submit";
}) {
	return (
		<button
			type={type}
			className={`py-4 border-text-highlight border font-extrabold bg-text-highlight hover:shadow-lg min-w-[260px] text-text-tertiary rounded-lg ${className}`}
			onClick={onClick}
			disabled={disabled}
			{...props}>
			{children}
		</button>
	);
}
