export function Heading1({
	children,
	className,
}: {
	children: any;
	className?: string;
}) {
	return (
		<h1
			className={`text-4xl font-bold leading-tight text-green-400 ${className}`}>
			{children}
		</h1>
	);
}

export function Heading2({
	children,
	className,
}: {
	children: any;
	className?: string;
}) {
	return (
		<h1 className={`text-3xl text-bold leading-tight ${className}`}>
			{children}
		</h1>
	);
}

export function Heading3({
	children,
	className,
}: {
	children: any;
	className?: string;
}) {
	return (
		<h1 className={`text-xl leading-tight font-bold ${className}`}>
			{children}
		</h1>
	);
}

export function Paragraph({
	children,
	className,
}: {
	children: any;
	className?: string;
}) {
	return <h1 className={`text-base ${className}`}>{children}</h1>;
}

export function ButtonText({
	children,
	className,
}: {
	children: any;
	className?: string;
}) {
	return <p className={`text-base font-bold ${className}`}>{children}</p>;
}
