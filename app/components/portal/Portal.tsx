import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function PortalComponent({
	children,
	selector,
}: {
	children: React.ReactNode;
	selector: string;
}) {
	const ref = useRef<HTMLDivElement>();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const element =
			(document.querySelector(selector) as HTMLDivElement) || null;

		if (element) {
			ref.current = element;
			setMounted(true);
		}
	}, [selector]);

	return ref.current && mounted ? createPortal(children, ref.current) : null;
}
