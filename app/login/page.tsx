'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const validCredentials = {
  email: "test@bulltechgroup.co.za",
  password: "tPA%G%5FZap^V&p$",
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === validCredentials.email && password === validCredentials.password) {
      localStorage.setItem("auth", "true");
      router.replace("/dashboard");
      router.refresh();
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/login-bg.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign In</h2>
        {error && <p className="text-orange-500 font-semibold text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 w-full text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox bg-transparent border-gray-500 text-red-600" />
              <span>Remember me</span>
            </label>
          </div>
          <a href="#" className="text-gray-400 hover:underline hover:text-orange-500">
            Forgot password?
          </a>
        </div>
        <p className="mt-6 text-center text-gray-400 text-sm">
          New to BullTech?{" "}
          <a href="#" className="text-white hover:underline hover:text-orange-500">
            Sign up now.
          </a>
        </p>
        <p className="mt-4 text-center text-xs text-gray-500">
          This page is protected by reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-500 hover:underline hover:text-orange-500">
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
}