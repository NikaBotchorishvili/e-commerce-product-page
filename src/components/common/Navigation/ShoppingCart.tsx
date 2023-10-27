import { useSneakerSelector } from "../../../hooks/redux";

const ShoppingCart: React.FC = () => {
	const amount = useSneakerSelector(state => state.amount.sneakerAmount)

	return (
		<div className="absolute md:w-[200px] md:p-4 box-content shadow-2xl rounded-xl -translate-x-1/2 translate-y-8">
            <h1 className="text-xl font-bold">Cart</h1>
			<small>{amount}</small>
        </div>
	);
};

export default ShoppingCart;
