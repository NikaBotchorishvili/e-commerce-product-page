import logo from "../../../assets/images/logo.svg";
import profileImage from "../../../assets/images/image-avatar.png";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
	return (
		<header className=" w-[100dvw]">
			<section className="flex w-[95%] md:w-[80%] lg:w-[70%] mx-auto md:border-b border-b-GrayishBlue py-5 justify-between">
				<div className="flex gap-x-10 items-center">
					<Sidebar />
					<img className="" src={logo} alt="logo" />
					<nav className="hidden md:block">
						<ul className="flex gap-x-5 text-DarkGrayishBlue">
							<li className="">
								<a
									className="pb-8 hover:border-b-[3px] border-b-Orange"
									href="#"
								>
									Collections
								</a>
							</li>
							<li>
								<a
									className="pb-8 hover:border-b-[3px] border-b-Orange"
									href="#"
								>
									Men
								</a>
							</li>
							<li>
								<a
									className="pb-8 hover:border-b-[3px] border-b-Orange"
									href="#"
								>
									Women
								</a>
							</li>
							<li>
								<a
									className="pb-8 hover:border-b-[3px] border-b-Orange"
									href="#"
								>
									About
								</a>
							</li>
							<li>
								<a
									className="pb-8 hover:border-b-[3px] border-b-Orange"
									href="#"
								>
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="flex items-center gap-x-5">
					<div>
						<FontAwesomeIcon icon={faShoppingCart} />
					</div>
					<img
						src={profileImage}
						className="h-[50px] -z-20 rounded-full border-2 border-Orange cursor-pointer"
						alt="profile image "
					/>
				</div>
			</section>
		</header>
	);
};

export default Header;
