import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import SlideShow from "./SlideShow";

import images from "../../../assets/data.json";

const ProductImages: React.FC = () => {
	const [selectedImage, setSelectedImage] = useState<number>(0);
	const [slideShowToggled, setSlideShowToggled] = useState<boolean>(false);
	const thumbnails = images.map((imageObject, idx) => {
		return (
			<li className="relative" key={idx}>
				{idx == selectedImage && (
					<div className="absolute border-Orange border-2 bg-White bg-opacity-60 w-full h-full rounded-xl "></div>
				)}

				<img
					src={imageObject.thumbnail}
					onClick={() => setSelectedImage(idx)}
					className="rounded-xl "
					alt="thumbnail"
				/>
			</li>
		);
	});

	return (
		<>
			<SlideShow
				setSlideShowToggled={setSlideShowToggled}
				slideShowToggled={slideShowToggled}
				selectedImage={selectedImage}
				setSelectedImage={setSelectedImage}
			/>
			<section className=" md:min-w-[300px] md:max-w[350px] w-screen md:w-[380px] flex flex-col gap-y-5">
				<div className="relative">
					<FontAwesomeIcon
						className="md:hidden block absolute top-1/2 h-[25px] -translate-y-1/2 left-5 bg-White rounded-full p-2 w-[25px] cursor-pointer"
						icon={faAngleLeft}
						onClick={() => {
							setSelectedImage((prev) =>
								prev == 0 ? images.length - 1 : prev - 1
							);
						}}
					/>
					<img
						src={images[selectedImage].image}
						className="md:min-w-[300px] md:max-w[350px] w-screen md:w-[380px]  object-cover object-top md:rounded-2xl"
						alt=""
						onClick={() => setSlideShowToggled(true) }
					/>
					<FontAwesomeIcon
						className="md:hidden block absolute top-1/2 h-[25px] -translate-y-1/2 right-5 bg-White rounded-full p-2 w-[25px] cursor-pointer"
						icon={faAngleRight}
						onClick={() => {
							setSelectedImage((prev) =>
								prev == images.length - 1 ? 0 : prev + 1
							);
						}}
					/>
				</div>

				<ul className="hidden md:flex md:gap-x-5">{thumbnails}</ul>
			</section>
		</>
	);
};

export default ProductImages;
