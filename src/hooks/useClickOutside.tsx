type Props = {
	handler: () => void;
};

import { useRef, useEffect } from "react";
const useClickOutside = ({ handler }: Props) => {
	const domNode = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const clickHandler = (e: MouseEvent) => {
			if (
				domNode &&
				domNode.current &&
				!domNode.current.contains(e.target as HTMLElement)
			) {
                handler();
			}
		};
        document.addEventListener("mousedown", clickHandler)

        return () => {
            document.removeEventListener("mousedown", clickHandler)
        }
	}, []);
	return domNode;
};

export default useClickOutside;
