import { useState } from "react";

const Login: React.FC = () => {
	const [isRegister, setIsRegister] = useState<boolean>(false);

	const toggleForm = () => setIsRegister((prev) => !prev);

	return (
		<div className="flex justify-center items-center min-h-screen bg-[rgb(217,248,217)]">
			<div
				className="relative bg-white rounded-lg shadow-lg p-6"
				style={{ perspective: "1000px" }}
			>
				{/* Título Dinâmico com Espaçamento Acima */}
				<h2 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-4">
					{isRegister ? "Sign up" : "Log in"}
				</h2>

				{/* Switch Toggle para Alternância entre Login e Cadastro */}
				<div className="flex flex-col items-center gap-4 mb-8">
					<label className="relative flex items-center">
						<input
							type="checkbox"
							checked={isRegister}
							onChange={toggleForm}
							className="sr-only"
						/>
						<span className="block w-12 h-6 bg-gray-300 rounded-full cursor-pointer"></span>
						<span
							className={`absolute left-0 w-6 h-6 bg-white rounded-full border-2 border-gray-700 transform transition-transform duration-300 ${
								isRegister ? "translate-x-6" : ""
							}`}
						></span>
					</label>
					<div className="relative text-lg font-semibold text-gray-700">
						<span
							className={`absolute -left-20 ${!isRegister ? "underline" : ""}`}
						>
							Log in
						</span>
						<span
							className={`absolute -right-20 ${isRegister ? "underline" : ""}`}
						>
							Sign up
						</span>
					</div>
				</div>

				{/* Flip Card para Alternância de Formulários */}
				<div
					className={`relative w-72 h-80 transition-transform duration-700 transform ${
						isRegister ? "rotate-y-180" : ""
					}`}
					style={{ transformStyle: "preserve-3d" }}
				>
					{/* Lado Frontal - Login */}
					<div
						className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 rounded-lg shadow-md p-4"
						style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
					>
						<form className="flex flex-col items-center gap-4 w-full">
							<input
								type="email"
								placeholder="Email"
								className="w-60 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-900"
							/>
							<input
								type="password"
								placeholder="Password"
								className="w-60 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-900"
							/>
							<button
								type="submit"
								className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded transition-colors"
							>
								Let`s go!
							</button>
						</form>
					</div>

					{/* Lado Traseiro - Sign up */}
					<div
						className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 rounded-lg shadow-md p-4 transform rotate-y-180"
						style={{
							backfaceVisibility: "hidden",
							transformStyle: "preserve-3d",
						}}
					>
						<form className="flex flex-col items-center gap-4 w-full">
							{isRegister && (
								<input
									type="text"
									placeholder="Name"
									className="w-60 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-900"
								/>
							)}
							<input
								type="email"
								placeholder="Email"
								className="w-60 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-900"
							/>
							<input
								type="password"
								placeholder="Password"
								className="w-60 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-900"
							/>
							<button
								type="submit"
								className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded transition-colors"
							>
								{isRegister ? "Confirm!" : "Confirm!"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
