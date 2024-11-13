import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [showButton, setShowButton] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate(); // Para navegação

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setIsScrolled(scrollY > 50);
			setShowButton(scrollY > 400);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const goToLogin = () => {
		navigate("/login"); // Redireciona para a página de login
	};

	return (
		<nav
			className={cn(
				"fixed top-0 z-50 w-full py-3 transition-all duration-300",
				isScrolled ? "bg-opacity-90 shadow-lg" : "bg-opacity-100",
				"bg-custom-gradient"
			)}
		>
			<div className="container px-4 mx-auto flex justify-between items-center">
				{/* Logo */}
				<img
					className="h-20 w-auto"
					src="/src/assets/images/RESPIRA_Logo.png"
					alt="Logo"
				/>

				{/* Menu para Desktop */}
				<div className="hidden lg:flex space-x-12 text-2xl font-semibold text-white">
					<a
						href="#Home"
						className="text-white hover:text-gray-200 transition-colors"
					>
						Home
					</a>
					<a
						href="#About"
						className="text-white hover:text-gray-200 transition-colors"
					>
						About
					</a>
					<a
						href="#Features"
						className="text-white hover:text-gray-200 transition-colors"
					>
						Features
					</a>
					<Button
						onClick={goToLogin}
						className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded transition-colors"
					>
						Login
					</Button>
				</div>

				{/* Menu Mobile */}
				<DropdownMenu open={isMenuOpen} onOpenChange={toggleMenu}>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="lg:hidden text-white">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent
						align="end"
						className="bg-custom-gradient text-white p-5 space-y-3"
					>
						<DropdownMenuItem onSelect={() => setIsMenuOpen(false)}>
							<a
								href="#Home"
								className="block text-white hover:text-gray-200 transition-colors"
							>
								Home
							</a>
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => setIsMenuOpen(false)}>
							<a
								href="#About"
								className="block text-white hover:text-gray-200 transition-colors"
							>
								About
							</a>
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => setIsMenuOpen(false)}>
							<a
								href="#Contact"
								className="block text-white hover:text-gray-200 transition-colors"
							>
								Contact
							</a>
						</DropdownMenuItem>
						<DropdownMenuItem
							onSelect={() => {
								setIsMenuOpen(false);
								goToLogin();
							}}
						>
							<span className="block text-white hover:text-gray-200 transition-colors">
								Login
							</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			{/* Botão de voltar ao topo */}
			{showButton && (
				<Button
					onClick={scrollToTop}
					className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
				>
					<ChevronUp className="w-6 h-6" />
				</Button>
			)}
		</nav>
	);
}
