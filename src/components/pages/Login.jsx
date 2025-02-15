import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError("Email and Password are required!");
            return;
        }

        setError(""); // Clear errors if validation passes
        console.log("Logging in with:", email, password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                
                {/* Error Message */}
                {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                <form className="mt-6" onSubmit={handleLogin}>
                    {/* Email */}
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter your email" 
                            required 
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Enter your password" 
                            required 
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right mt-2">
                        <Link to="/forgot-password" className="text-blue-600 text-sm hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 cursor-pointer text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Login
                    </button>

                    {/* Register Link */}
                    <p className="text-center text-gray-600 text-sm mt-4">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-blue-600 font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
