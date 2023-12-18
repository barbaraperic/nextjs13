import { FC } from "react";

const space = {
	large: "h-60",
	medium: "h-40",
	small: "h-20",
};

interface SpacerComponentType {
	size: "large" | "medium" | "small";
}

const SpacerComponent: FC<SpacerComponentType> = ({ size }) => {
	return <div className={space[size]}></div>;
};

export default SpacerComponent;
