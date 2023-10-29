type Props = {
	shoppingCartToggled: boolean;
	setShoppingCartToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSneakerDispatch, useSneakerSelector } from "../../../hooks/redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reset } from "../../../redux/shoppingCart/features/cartSlice";
import useClickOutside from "../../../hooks/useClickOutside";
import { motion, AnimatePresence } from "framer-motion";
const ShoppingCart: React.FC<Props> = ({ setShoppingCartToggled, shoppingCartToggled }) => {
	const amount = useSneakerSelector((state) => state.amount.amount);
	const dispatch = useSneakerDispatch();
	const ShoppingCartRef = useClickOutside({
		handler: () => {
			setShoppingCartToggled(false);
		},
	});

	return (
		<AnimatePresence>
			{shoppingCartToggled && (
				<motion.section
					initial={{ opacity: 0, top: 200 }}
					animate={{ opacity: 1, top: 30 }}
					exit={{ opacity: 0, top: 200 }}
					ref={ShoppingCartRef}
					className="absolute md:w-[340px] md:py-4 bg-[#fff] shadow-2xl rounded-xl md:-translate-x-1/2 md:translate-y-8 md:left-auto left-1/2 translate-y-10 -translate-x-1/2  z-50 w-[90%] sm:w-[80%]"
				>
					<h1 className="text-xl font-bold px-4 border-b border-b-GrayishBlue text-VeryDarkBlue py-2">
						Cart
					</h1>
					<div className="flex flex-col items-center gap-y-8 py-4 px-2 box-content">
						{amount !== 0 ? (
							<>
								<div className="flex box-border w-full justify-evenly mt-3 gap-x-2 items-center">
									<img
										src="products/image-product-1.jpg"
										className="h-[50px] rounded-lg"
										alt=""
									/>
									<div className="flex flex-col ">
										<h2 className="text-DarkGrayishBlue text-xl md:text-md">
											Fall Limited Edition Sneakers
										</h2>
										<small className="flex gap-x-3 text-md">
											<span className="text-DarkGrayishBlue">
												$125 X {amount}
											</span>
											<span className="font-bold">
												${amount * 125}
											</span>
										</small>
									</div>
									<FontAwesomeIcon
										onClick={() => dispatch(reset())}
										className="h-[15px] text-DarkGrayishBlue cursor-pointer"
										icon={faTrash}
									/>
								</div>
								<button className="text-2xl font-bold active:opacity-80 bg-Orange text-White w-[90%] py-3 px-10 rounded-2xl text-center">
									Checkout
								</button>
							</>
						) : (
							<div className="py-14 text-DarkGrayishBlue font-bold">
								<h1 className="text-center">Your cart is empty</h1>
							</div>
						)}
					</div>
				</motion.section>

			)}
		</AnimatePresence>
	);
};

export default ShoppingCart;
