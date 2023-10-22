import logo from "../../../assets/images/logo.svg";
import cartIcon from "../../../assets/images/icon-cart.svg";
import profileImage from "../../../assets/images/image-avatar.png";

const Header: React.FC = () => {
	return (
		<header className="hidden md:block w-[100dvw]">
			<section className="flex w-[80%] lg:w-[70%] mx-auto border-b border-b-GrayishBlue py-5 justify-between">
				<div className="flex gap-x-10 items-center">
					<img src={logo} alt="logo" />
					<nav>
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
						<img
							src={cartIcon}
							className="cursor-pointer"
							alt="cart icon"
						/>
					</div>
					<img
						src={profileImage}
						className="h-[50px] rounded-full border-2 border-Orange cursor-pointer"
						alt="profile image "
					/>
				</div>
			</section>
		</header>
	);
};

export default Header;
