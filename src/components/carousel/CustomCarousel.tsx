import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MapSlide from "./MapSlide";
import ChartSlide from "./ChartSlide";
import LoremSlide from "./LoremSlide";

const CustomCarousel: React.FC = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: (
			<button
				className="custom-arrow bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-opacity-70"
				aria-label="Next Slide"
			>
				➔
			</button>
		),
		prevArrow: (
			<button
				className="custom-arrow bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-opacity-70"
				aria-label="Previous Slide"
			>
				➔
			</button>
		),
		fade: false, // Desabilitado para evitar conflito com interação do mapa
		swipe: false, // Desabilitar o swipe para evitar conflito ao arrastar no mapa
	};

	return (
		<div className="my-8 w-full max-w-lg mx-auto border border-gray-300 rounded-md p-4 shadow-lg text-center bg-white relative">
			<Slider {...settings}>
				<div>
					<MapSlide />
				</div>
				<div>
					<ChartSlide />
				</div>
				<div>
					<LoremSlide />
				</div>
			</Slider>
		</div>
	);
};

export default CustomCarousel;
