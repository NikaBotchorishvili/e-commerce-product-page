type Props = {
	selectedImage: number;
	slideShowToggled: boolean;
	setSelectedImage: React.Dispatch<React.SetStateAction<number>>;
	setSlideShowToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "../../../assets/data.json";
import Overlay from "../../common/Overlay";
import {
	faAngleLeft,
	faAngleRight,
	faX,
} from "@fortawesome/free-solid-svg-icons";

const SlideShow: React.FC<Props> = ({
	selectedImage,
	slideShowToggled,
	setSelectedImage,
	setSlideShowToggled,
}) => {
	return (
		<div className="md:block hidden">
			<Overlay toggled={slideShowToggled} />
			{slideShowToggled && (
				<>
					<div className="md:block hidden absolute top-1/2 left-1/2">
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-50 -translate-y-1/2 md:min-w-[300px] md:max-w[350px] lg:max-w-[420px] ">
							<FontAwesomeIcon
								className="absolute cursor-pointer h-[40px] w-[40px] text-White right-6 -translate-y-12"
								icon={faX}
								onClick={() => {
									setSlideShowToggled(false)
								}}
							/>
							<FontAwesomeIcon
								className="absolute cursor-pointer h-[40px] w-[40px] top-1/2 hover:text-Orange p-1 transition-colors -translate-y-1/2 -translate-x-1/2 bg-White rounded-full"
								icon={faAngleLeft}
								onClick={() => {
									setSelectedImage((prev) =>
										prev == 0 ? images.length - 1 : prev - 1
									);
								}}
							/>
							<img
								src={images[selectedImage].image}
								className="md:min-w-[300px] md:max-w[350px] h-[300px] md:h-auto w-screen object-cover object-top  lg:max-w-[420px] md:rounded-2xl"
								alt="image"
							/>
							<FontAwesomeIcon
								className="absolute cursor-pointer h-[40px] w-[40px] hover:text-Orange transition-colors p-1 top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-White rounded-full"
								icon={faAngleRight}
								onClick={() => {
									setSelectedImage((prev) =>
										prev == images.length - 1 ? 0 : prev + 1
									);
								}}
							/>
						</div>
					</div>
				</>
			)}{" "}
		</div>
	);
};

export default SlideShow;
