import * as React from "react";

function ArrowBackIconComponent(props: any) {
	return (
		<>
			<svg
				width="19.319mm"
				height="6.2111mm"
				version="1.1"
				viewBox="0 0 19.319 6.2111"
				xmlns="http://www.w3.org/2000/svg">
				<defs>
					<marker
						id="ArrowWide"
						overflow="visible"
						markerHeight="1"
						markerWidth="1"
						orient="auto-start-reverse"
						preserveAspectRatio="xMidYMid"
						viewBox="0 0 1 1">
						<path
							transform="rotate(180 .125 0)"
							d="m3-3-3 3 3 3"
							fill="none"
							stroke="context-stroke"
						/>
					</marker>
					<marker
						id="ArrowWide-8"
						overflow="visible"
						markerHeight="1"
						markerWidth="1"
						orient="auto-start-reverse"
						preserveAspectRatio="xMidYMid"
						viewBox="0 0 1 1">
						<path
							transform="rotate(180 .125 0)"
							d="m3-3-3 3 3 3"
							fill="none"
							stroke="context-stroke"
						/>
					</marker>
				</defs>
				<g transform="translate(-29.104 -105.3)">
					<path
						d="m33.366 99.477h18.433z"
						marker-start="url(#ArrowWide)"
						stroke="#000"
						stroke-linecap="round"
						stroke-width=".92604"
					/>
					<path
						d="m29.99 108.41h18.433z"
						marker-start="url(#ArrowWide-8)"
						stroke="#000"
						stroke-linecap="round"
						stroke-width=".92604"
					/>
				</g>
			</svg>
		</>
	);
}

export default ArrowBackIconComponent;
