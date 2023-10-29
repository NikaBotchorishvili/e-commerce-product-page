import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
const Product: React.FC = () => {
	return (
		<main className="flex flex-col gap-y-8 md:flex-row gap-x-10 w-[100dvw] md:w-[90dvw] lg:w-[80dvw]  justify-between mx-auto md:mt-12 ">
			<ProductImages />
			<ProductInfo />
		</main>
	);
};

export default Product;
