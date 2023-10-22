import logo from "../../../assets/images/logo.svg";
import cartIcon from "../../../assets/images/icon-cart.svg";
import profileImage from "../../../assets/images/image-avatar.png";
const Navigation: React.FC = () => {
	return (
		<>
			<header className="hidden md:flex justify-around w-[100dvw]">
				<section className="flex gap-x-10 items-center">
					<img src={logo} alt="logo" />
					<nav>
						<ul className="flex gap-x-5">
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
				</section>
				<section className="flex items-center gap-x-5">
					<img src={cartIcon} alt="cart icon" />
					<img src={profileImage} className="h-[50px]" alt="profile image" />
				</section>
			</header>
		</>
	);
};

export default Navigation;
