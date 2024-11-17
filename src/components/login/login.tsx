import { useState } from "react";
import useApi from "@/hooks/useApi";
import { loginUser, registerUser } from "@/lib/api";

const LoginComponent: React.FC = () => {
	const [isRegister, setIsRegister] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const api = useApi();

	const toggleForm = () => setIsRegister((prev) => !prev);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			let data;
			if (isRegister) {
				data = await registerUser(api, name, email, password);
			} else {
				data = await loginUser(api, email, password);
				localStorage.setItem("token", data.token);
				window.location.href = "/dashboard";
			}
			setMessage(data.message || "Success");
		} catch (error: any) {
			setMessage(error.response?.data?.message || "Something went wrong");
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-[rgb(217, 248, 217)]">
			<div className="relative bg-white rounded-lg shadow-lg p-6" style={{ perspective: "1000px" }}>
				<h2 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-4">
					{isRegister ? "Sign up" : "Log in"}
				</h2>

				<div className="flex flex-col items-center gap-4 mb-8">
					<label className="relative flex items-center">
						<input type="checkbox" checked={isRegister} onChange={toggleForm} className="sr-only" />
						<span className="block w-12 h-6 bg-gray-300 rounded-full cursor-pointer"></span>
						<span
						className={`absolute left-0 w-6 h-6 bg-white rounded-full border-2 border-gray-700 transform transition-transform duration-300 ${
						isRegister ? "translate-x-6" : ""
						}`}
						></span>
					</label>
					<div className="relative text-lg font-semibold text-gray-700">
						<span className={`absolute -left-20 ${!isRegister ? "underline" : ""}`}>Log in</span>
						<span className={`absolute -right-20 ${isRegister ? "underline" : ""}`}>Sign up</span>
					</div>
				</div>

				<form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
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
