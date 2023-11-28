"use client";

import React from "react";
import { useSpring, animated } from "react-spring";

// import { getDistanceBetweenPoints, convertRadiansToDegrees } from "./utils";
// import styles from "./LikeButton.module.css";
import useBoundingBox from "../hooks/useBoundingBox";
import useMousePosition from "../hooks/useMousePosition";
import { FiCoffee } from "react-icons/fi";

function LikeButton() {
	const mousePosition = useMousePosition();

	const ref = React.useRef();
	const boundingBox = useBoundingBox(ref);

	const bodyRotation = calculateBodyRotation(boundingBox, mousePosition);
	// const eyeTranslate = calculateEyePosition(boundingBox, mousePosition);
	const bodyStyle = useSpring({
		transform: `rotate(${bodyRotation}deg)`,
	});
	// const eyeTransform = useSpring({
	// 	transform: `translate(
	//     ${eyeTranslate.x}
	//     ${eyeTranslate.y}
	//   )`,
	// });

	return (
		<button style={bodyStyle}>
			<animated.svg
				xmlns="http:www.w3.org/2000/svg"
				ref={ref}
				width="222"
				height="264"
				fill="none"
				viewBox="0 0 222 264"
				style={bodyStyle}>
				<path
					fill="#EEEDE7"
					d="M222 159c0 72.902-49.696 105-111 105S0 231.902 0 159 49.696 0 111 0s111 86.098 111 159z"
				/>

				<path
					stroke="#000"
					strokeLinecap="round"
					strokeWidth="8"
					d="M125 191a13.994 13.994 0 01-4.101 9.899 13.994 13.994 0 01-19.798 0A13.996 13.996 0 0197 191"
				/>

				<g>
					<path
						stroke="#fff"
						strokeLinecap="round"
						strokeWidth="6"
						d="M45 71s0-10.5 15.038-24.897C72.757 33.928 79 33 79 33"
					/>
				</g>
			</animated.svg>
		</button>
	);
}

const calculateBodyRotation = (boundingBox: any, mousePosition: any) => {
	if (
		!boundingBox ||
		typeof mousePosition.x !== "number" ||
		typeof mousePosition.y !== "number"
	) {
		return 0;
	}

	const areaOfEffectRadius = boundingBox.height * 2;

	const headCenterPoint = {
		x: boundingBox.left + boundingBox.width / 2,
		y: boundingBox.top + boundingBox.height / 2,
	};

	// const distanceToHead = getDistanceBetweenPoints(
	// 	mousePosition,
	// 	headCenterPoint
	// );

	// if (distanceToHead > areaOfEffectRadius) {
	// 	return 0;
	// }

	const deltaX = headCenterPoint.x - mousePosition.x;
	const deltaY = headCenterPoint.y - mousePosition.y;

	const angleInRads = Math.atan2(deltaY, deltaX);
	const angleInDegrees = 180 + convertRadiansToDegrees(angleInRads);

	const rotationMax = 10;

	let a, b;
	if (angleInDegrees < 180) {
		a = (rotationMax / 90) * -1;
		b = rotationMax;
	} else {
		a = rotationMax / 90;
		b = rotationMax * -3;
	}

	return a * angleInDegrees + b;
};

function convertRadiansToDegrees(radians: any) {
	var pi = Math.PI;
	return radians * (180 / pi);
}

// function calculateEyePosition(boundingBox, mousePosition) {
// 	if (
// 		!boundingBox ||
// 		typeof mousePosition.x !== "number" ||
// 		typeof mousePosition.y !== "number"
// 	) {
// 		return { x: 0, y: 0 };
// 	}

// 	const faceCenter = {
// 		x: boundingBox.left + boundingBox.width * 0.5,
// 		y: boundingBox.top + boundingBox.height * 0.625,
// 	};

// 	const relativeMousePosition = {
// 		x: mousePosition.x - faceCenter.x,
// 		y: mousePosition.y - faceCenter.y,
// 	};

// 	const x = Math.round(relativeMousePosition.x * 0.03);
// 	const y = Math.round(relativeMousePosition.y * 0.03);

// 	return { x, y };
// }

export default LikeButton;
