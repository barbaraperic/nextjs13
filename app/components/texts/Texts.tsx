import { FC } from "react";

interface TextProps {
	children: any;
	className?: string;
}

const Heading1: FC<TextProps> = ({ children, className }) => {
	return (
		<h1
			className={`text-4xl font-bold leading-tight text-green-400 ${className}`}>
			{children}
		</h1>
	);
};

const Heading2: FC<TextProps> = ({ children, className }) => {
	return (
		<h2 className={`text-3xl text-bold leading-tight ${className}`}>
			{children}
		</h2>
	);
};

const Heading3: FC<TextProps> = ({ children, className }) => {
	return (
		<h3 className={`text-xl leading-tight font-bold ${className}`}>
			{children}
		</h3>
	);
};

const Paragraph: FC<TextProps> = ({ children, className }) => {
	return <p className={`text-base ${className}`}>{children}</p>;
};

const ButtonText: FC<TextProps> = ({ children, className }) => {
	return <p className={`text-base font-bold ${className}`}>{children}</p>;
};

export { Heading1, Heading2, Heading3, Paragraph, ButtonText };
