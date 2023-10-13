export function Heading1({
	children,
	className,
}: {
	children: any;
	className?: string;
}) {
	return <h1 className={`text-5xl font-display ${className}`}>{children}</h1>;
}

export function Heading2({
	children,
	className,
}: {
	children: any;
	className?: string;
}) {
	return <h1 className={`text-4xl font-display ${className}`}>{children}</h1>;
}

export function Heading3({
	children,
	className,
}: {
	children: any;
	className?: string;
}) {
	return <h1 className={`text-2xl font-display ${className}`}>{children}</h1>;
}

export function Paragraph({
	children,
	className,
}: {
	children: any;
	className?: string;
}) {
	return <h1 className={`text-lg font-body ${className}`}>{children}</h1>;
}

export function ButtonText({
	children,
	className,
}: {
	children: any;
	className?: string;
}) {
	return <p className={`text-lg font-body ${className}`}>{children}</p>;
}
