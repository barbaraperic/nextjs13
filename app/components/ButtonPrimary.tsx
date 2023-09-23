import { ReactElement } from "react";

export default function ButtonPrimary({
	children,
	onClick,
	className,
}: {
	children: any;
	onClick: () => void;
	className?: string;
}) {
	return (
		<button
			className={`py-4 bg-secondary min-w-[260px] ${className}`}
			onClick={onClick}>
			{children}
		</button>
	);
}
