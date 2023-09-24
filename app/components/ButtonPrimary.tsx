import { ReactElement } from "react";

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
			className={`py-4 bg-secondary min-w-[260px] text-white rounded-lg font-bold ${className}`}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	);
}
