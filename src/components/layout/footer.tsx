import { FC } from "react";
import { Input } from "@/components/ui/input";
import InstagramIcon from "../../assets/icons/instagram.png";
import GithubIcon from "../../assets/icons/github.png";
import LinkedInIcon from "../../assets/icons/linkedin.png";

export const Footer: FC = () => {
	return (
		<footer className="bg-custom-gradient py-8">
			<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
				{/* Informações */}
				<div className="text-center lg:text-left space-y-2">
					<h2 className="text-lg font-bold text-white">Informations</h2>
					<p className="text-white">Fametro</p>
					<p className="text-white">Engenharia De Software</p>
					<p className="text-white">Fone: (92) 9 4002-8922</p>
				</div>

				{/* Redes Sociais */}
				<div className="text-center lg:text-left space-y-2">
					<h2 className="text-lg font-bold text-white">Follow us</h2>
					<div className="flex flex-col items-center lg:items-start space-y-1">
						<a
							href="#instagram"
							className="flex items-center space-x-2 text-white"
						>
							<img className="w-6 h-6" src={InstagramIcon} alt="Instagram" />
							<span>Instagram</span>
						</a>
						<a
							href="#github"
							className="flex items-center space-x-2 text-white"
						>
							<img className="w-6 h-6" src={GithubIcon} alt="GitHub" />
							<span>GitHub</span>
						</a>
						<a
							href="#linkedin"
							className="flex items-center space-x-2 text-white"
						>
							<img className="w-6 h-6" src={LinkedInIcon} alt="LinkedIn" />
							<span>LinkedIn</span>
						</a>
					</div>
				</div>

				{/* Campo de Inscrição */}
				<div className="text-center lg:text-left space-y-2">
					<h2 className="text-lg font-bold text-white">Entre em contato</h2>
					<div className="flex items-center space-x-2">
						<Input
							type="text"
							placeholder="Escreva seu email"
							className="bg-white"
						/>
						<button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded transition-colors">
							Enviar
						</button>
					</div>
					<p className="text-xs text-white mt-2">
						© by RESPIRAL_INOV em TECH_Fametro
					</p>
				</div>
			</div>
		</footer>
	);
};
