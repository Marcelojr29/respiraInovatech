import CustomCarousel from "@/components/carousel/CustomCarousel";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const Home = () => {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Navbar - Altura aumentada */}
			<div className="h-24 bg-white shadow-lg">
				<Navbar />
			</div>

			{/* Conteúdo principal com carrossel centralizado */}
			<main className="flex-grow flex items-center justify-center p-4 pt-20">
				<div className="w-full max-w-7xl px-4">
					<CustomCarousel />
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Home;
