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
	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setIsScrolled(scrollY > 50);
			setShowButton(scrollY > 400);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navigateTo = (path: string) => {
		navigate(path);
		setIsMenuOpen(false); 
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<nav
			className={cn(
				"fixed top-0 z-50 w-full py-3 transition-all duration-300",
				isScrolled ? "bg-opacity-90 shadow-lg" : "bg-opacity-100",
				"bg-custom-gradient"
			)}
		>
			<div className="container mx-auto px-4 flex justify-between items-center">
				{/* Logo */}
				<img
					src="/src/assets/images/RESPIRA_Logo.png"
					alt="Logo"
					className="h-20 w-auto"
				/>

				{/* Desktop Menu */}
				<div className="hidden lg:flex space-x-12 text-2xl font-semibold text-white">
					<Button
						onClick={() => navigateTo("/")}
						className="hover:text-gray-200 transition-colors"
					>
						Home
					</Button>
					<Button
						onClick={() => navigateTo("/dashboard")}
						className="hover:text-gray-200 transition-colors"
					>
						Dashboard
					</Button>
					<Button
						onClick={() => navigateTo("/reports")}
						className="hover:text-gray-200 transition-colors"
					>
						Reports
					</Button>
					<Button
						onClick={() => navigateTo("/login")}
						className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded transition-colors"
					>
						Login/Register
					</Button>
				</div>

				{/* Mobile Menu */}
				<DropdownMenu
					open={isMenuOpen}
					onOpenChange={() => setIsMenuOpen(!isMenuOpen)}
				>
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
						<DropdownMenuItem onSelect={() => navigateTo("/")}>
							Home
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => navigateTo("/dashboard")}>
							Dashboard
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => navigateTo("/reports")}>
							Reports
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => navigateTo("/login")}>
							Login/Register
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			{/* Scroll to Top Button */}
			{showButton && (
				<Button
					onClick={scrollToTop}
					className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all"
				>
					<ChevronUp className="w-6 h-6" />
				</Button>
			)}
		</nav>
	);
}
