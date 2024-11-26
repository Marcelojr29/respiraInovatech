import React, { useState } from "react";

const LoginComponent: React.FC = () => {
	const [isRegister, setIsRegister] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const mockUser = { email: "user@test.com", password: "12345" };

	const toggleForm = () => setIsRegister((prev) => !prev);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (isRegister) {
			if (email && password && name) {
				setMessage("Registro realizado com sucesso!");
			} else {
				setMessage("Preencha todos os campos!");
			}
		} else {
			if (email === mockUser.email && password === mockUser.password) {
				setMessage("Login bem-sucedido!");
				localStorage.setItem("token", "mock-token");
				window.location.href = "/dashboard";
			} else {
				setMessage("Credenciais inválidas!");
			}
		}
	};

	return (
		<div className="flex flex-col justify-center items-center min-h-screen bg-custom-green">
			{/* Logo fora do formulário */}
			<img
				src="/src/assets/images/RESPIRA_Logo.png"
				alt="Logo do Projeto"
				className="h-32 w-auto mb-8"
			/>

			<div
				className="relative bg-white rounded-lg shadow-lg p-6"
				style={{ perspective: "1000px" }}
			>
				<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
					{isRegister ? "Sign up" : "Log in"}
				</h2>

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
						<span className={`absolute -left-20 ${!isRegister ? "" : ""}`}>
							Log in
						</span>
						<span className={`absolute -right-20 ${isRegister ? "" : ""}`}>
							Sign up
						</span>
					</div>
				</div>

				<form
					onSubmit={handleSubmit}
					className="flex flex-col items-center gap-4"
				>
					{isRegister && (
						<input
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-60 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-900"
						/>
					)}
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-60 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-900"
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-60 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-900"
					/>
					<button
						type="submit"
						className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded transition-colors"
					>
						{isRegister ? "Sign up" : "Log in"}
					</button>
					<p className="text-red-500 mt-2">{message}</p>
				</form>
			</div>
		</div>
	);
};

export default LoginComponent;
