import { Navbar } from "../../components/layout/navbar";
import CustomCarousel from "../../components/carousel/CustomCarousel";
import { Footer } from "../../components/layout/footer";

export function Home() {
	return (
		<>
			<Navbar />
			<main className="flex-grow p-4 pt-20 flex items-start justify-center">
				<CustomCarousel />
			</main>
			<div className="mt-40">
				<Footer />
			</div>
		</>
	);
}
