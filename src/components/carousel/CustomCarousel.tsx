import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MapSlide from "./MapSlide";
import ChartSlide from "./ChartSlide";
import LoremSlide from "./AlertSlide";

const CustomCarousel: React.FC = () => {
	const sliderSettings = {
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false, 
		nextArrow: (
			<button
				className="custom-arrow bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
				aria-label="Próximo Slide"
			>
				➔
			</button>
		),
		prevArrow: (
			<button
				className="custom-arrow bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
				aria-label="Slide Anterior"
			>
				➔
			</button>
		),
		fade: false,
		swipe: false,
	};

	return (
		<div className="my-8 w-full max-w-lg mx-auto border border-gray-300 rounded-md shadow-lg bg-white">
			<Slider {...sliderSettings}>
				<div className="flex justify-center items-center h-[400px] w-full">
					{" "}
					<MapSlide />
				</div>
				<div className="flex justify-center items-center h-[400px] w-full">
					<ChartSlide />
				</div>
				<div className="flex justify-center items-center h-[400px] w-full">
					<LoremSlide />
				</div>
			</Slider>
		</div>
	);
};

export default CustomCarousel;
