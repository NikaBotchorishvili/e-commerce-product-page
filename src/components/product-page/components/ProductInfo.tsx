import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../redux/sneakers/features/amountSlice";

const ProductInfo: React.FC = () => {
	const amount = useSelector((state) => state.amount.sneakerAmount)
	const dispatch = useDispatch();
	dispatch
	return (
		<article className="max-w-md mx-5 md:mx-0 flex flex-col justify-evenly">
			<header className="flex flex-col gap-y-1">
				<h2 className="text-md text-Orange font-bold">
					SNEAKER COMPANY
				</h2>
				<h1 className="text-5xl font-bold text-VeryDarkBlue">
					Fall Limited Edition Sneakers
				</h1>
			</header>

			<span className="flex flex-col gap-y-3">
				<p>
					These low-profile sneakers are your perfect casual wear
					companion. Featuring a durable rubber outer sole, they'll
					withstand everything the weather can offer
				</p>

				<div className="flex flex-col gap-y-3">
					<small className="flex items-center gap-x-5">
						<span className="text-2xl font-bold">125.00$</span>
						<span className="text-Orange font-bold bg-Orange bg-opacity-20 text-md p-[1px]">
							50%
						</span>
					</small>
					<small className="text-GrayishBlue font-bold text-md line-through">
						250.00$
					</small>
				</div>
			</span>

			<form className="flex gap-x-2">
				<div className="flex items-center px-2 py-1 rounded-2xl bg-LightGrayishBlue w-[150px] text-2xl justify-around">
					<button
						onClick={() => {
							amount !== 0 && dispatch(decrement());
						}}
						className="text-Orange font-bold p-1"
						type="button"
					>
						-
					</button>
					<p className="text-lg">{amount}</p>
					<button
						onClick={() => dispatch(increment())}
						className="text-Orange font-bold p-1"
						type="button"
					>
						+
					</button>
				</div>
				<button className="text-White bg-Orange w-[200px] justify-center gap-x-5 rounded-xl text-xl font-bold flex items-center">
					<FontAwesomeIcon icon={faShoppingCart} />
					Add to cart
				</button>
			</form>
		</article>
	);
};

export default ProductInfo;
