import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

const images = [
	{
		image: "products/image-product-1.jpg",
		thumbnail: "products/image-product-1-thumbnail.jpg",
	},
	{
		image: "products/image-product-2.jpg",
		thumbnail: "/products/image-product-2-thumbnail.jpg",
	},
	{
		image: "products/image-product-3.jpg",
		thumbnail: "products/image-product-3-thumbnail.jpg",
	},
	{
		image: "products/image-product-4.jpg",
		thumbnail: "products/image-product-4-thumbnail.jpg",
	},
];

const ProductImages: React.FC = () => {
	const [selectedImage, setSelectedImage] = useState<number>(0);

	const thumbnails = images.map((imageObject, idx) => {
		return (
			<li className="relative" key={idx}>
				{idx == selectedImage && (
					<div className="absolute border-Orange border-2 bg-White bg-opacity-60 w-full h-full rounded-xl "></div>
				)}

				<img
					src={imageObject.thumbnail}
					onClick={() => setSelectedImage(idx)}
					className="rounded-xl  "
					alt="thumbnail"
				/>
			</li>
		);
	});

	return (
		<section className="w-screen md:min-w-[300px] md:max-w[350px] lg:max-w-[420px] flex flex-col gap-y-5">
			<div className="relative">
				<FontAwesomeIcon
					className="md:block hidden absolute top-1/2 h-[25px] -translate-y-1/2 left-5 bg-White rounded-full p-2 w-[25px] cursor-pointer"
					icon={faAngleLeft}
					onClick={() => {setSelectedImage((prev) => prev == 0? images.length - 1: prev - 1)}}
				/>
				<img
					src={images[selectedImage].image}
					className="md:min-w-[300px] md:max-w[350px] h-[300px] md:h-auto w-screen object-cover object-top  lg:max-w-[420px] md:rounded-2xl"
					alt=""
				/>
				<FontAwesomeIcon
					className="md:block hidden absolute top-1/2 h-[25px] -translate-y-1/2 right-5 bg-White rounded-full p-2 w-[25px] cursor-pointer"
					icon={faAngleRight}
					onClick={() => {setSelectedImage((prev) => prev == images.length - 1? 0: prev + 1)}}
				/>
			</div>

			<ul className="hidden md:flex md:gap-x-5">{thumbnails}</ul>
		</section>
	);
};

export default ProductImages;
