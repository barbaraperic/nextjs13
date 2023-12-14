import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const buttonClasses = cva(
	[
		"rounded-xl",
		"font-bold",
		"hover:scale-105",
		"active:scale-100",
		"transition",
		"duration-200",
		"ease-in-out",
		"shadow-basic",
		"tracking-wide",
	],
	{
		variants: {
			intent: {
				primary: ["bg-green-300", "text-white", "hover:bg-green-400"],
				secondary: [
					"bg-white",
					"text-black",
					"shadow-basic",
					// "hover:bg-gray-100",
				],
				text: ["bg-transparent", "text-black", "hover:text-text-highlight"],
			},
			size: {
				small: ["text-md", "py-1", "px-2"],
				medium: ["text-lg", "px-8", "py-3"],
				large: ["text-xl", "px-8", "py-4"],
			},
		},
		defaultVariants: {
			intent: "primary",
			size: "medium",
		},
	}
);

export interface ButtonProps
	extends React.HTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonClasses> {}

const Button: FC<ButtonProps> = ({
	children,
	intent,
	size,
	className,
	...props
}) => {
	return (
		<button className={buttonClasses({ intent, size, className })} {...props}>
			{children}
		</button>
	);
};

export default Button;
