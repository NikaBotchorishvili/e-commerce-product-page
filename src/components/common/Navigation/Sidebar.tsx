import menuIcon from "../../../assets/images/icon-menu.svg";
import closeIcon from "../../../assets/images/icon-close.svg";
import { useAnimate, motion } from "framer-motion";

import { useState } from "react";

import Overlay from "../Overlay";
const Sidebar: React.FC = () => {
	const [scope, animate] = useAnimate();
	const [sidebarToggled, setSidebarToggled] = useState<boolean>(false);

	const handleToggle = () => {
		setSidebarToggled((prev) => !prev);
		animateSidebar();
	};

	const animateSidebar = () => {
		if (sidebarToggled) {
			animate(scope.current, { translateX: "-100%" });
		} else {
			animate(scope.current, { translateX: "0%" });
		}
	};
	return (
		<>
			<img
				src={menuIcon}
				onClick={handleToggle}
				className="md:hidden cursor-pointer"
				alt="menu icon"
			/>
			<Overlay toggled={sidebarToggled}/>
			<motion.aside
				ref={scope}
                initial={{ translateX: "-100%" }}
                className="flex flex-col w-[200px] items-start h-[100dvh] z-10 bg-White top-0 left-0  absolute md:hidden px-5 box-border gap-y-8"
			>
				<img
					src={closeIcon}
					className="h-[15px] mt-5 cursor-pointer"
					onClick={handleToggle}
					alt="X icon"
				/>

				<nav>
					<ul className="flex flex-col gap-y-4 font-bold text-md">
						<li>
							<a href="#">Collections</a>
						</li>
						<li>
							<a href="#">Men</a>
						</li>
						<li>
							<a href="#">Women</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
			</motion.aside>
		</>
	);
};

export default Sidebar;
