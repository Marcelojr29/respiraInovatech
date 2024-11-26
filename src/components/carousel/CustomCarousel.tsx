import React, { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MapSlide from "./MapSlide";
import ChartSlide from "./ChartSlide";
import AlertSlide from "./AlertSlide";

// Componente personalizado para as setas
const Arrow: React.FC<{
	onClick?: () => void;
	direction: "left" | "right";
	disabled: boolean;
}> = ({ onClick, direction, disabled }) => {
	return (
		<button
			onClick={onClick}
			className={`absolute z-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-green-900 text-white shadow-lg hover:bg-green-300 transition-colors ${
				direction === "left" ? "-left-16" : "-right-16"
			} ${disabled ? "opacity-10 " : ""}`}
			aria-label={direction === "left" ? "Anterior" : "Próximo"}
			disabled={disabled}
		>
			{direction === "left" ? "←" : "→"}
		</button>
	);
};

const CustomCarousel: React.FC = () => {
	const sliderRef = useRef<Slider | null>(null);
	const [isNextDisabled, setIsNextDisabled] = useState(false);
	const [isPrevDisabled, setIsPrevDisabled] = useState(true);

	const totalSlides = React.Children.count([
		<MapSlide />,
		<ChartSlide />,
		<AlertSlide />,
	]);

	const sliderSettings: Settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		swipe: false,
		beforeChange: (_current, next) => {
			setIsPrevDisabled(next === 0);
			setIsNextDisabled(next === totalSlides - 1);
		},
	};

	const handleNext = () => {
		sliderRef.current?.slickNext();
	};

	const handlePrev = () => {
		sliderRef.current?.slickPrev();
	};

	return (
		<div className="relative my-8 w-full max-w-4xl mx-auto border border-gray-300 rounded-md shadow-lg bg-white">
			{/* Setas personalizadas */}
			<Arrow onClick={handlePrev} direction="left" disabled={isPrevDisabled} />
			<Arrow onClick={handleNext} direction="right" disabled={isNextDisabled} />

			<Slider ref={sliderRef} {...sliderSettings}>
				<div className="flex justify-center items-center h-[500px] w-full">
					<MapSlide />
				</div>
				<div className="flex justify-center items-center h-[500px] w-full">
					<ChartSlide />
				</div>
				<div className="flex justify-center items-center h-[500px] w-full">
					<AlertSlide />
				</div>
			</Slider>
		</div>
	);
};

export default CustomCarousel;
