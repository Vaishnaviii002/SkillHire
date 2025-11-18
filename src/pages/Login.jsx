import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const readUsers = () => {
    try {
      return JSON.parse(localStorage.getItem("users") || "[]");
    } catch {
      return [];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();
    const user = users.find((u) => u.email === normalizedEmail);

    if (!user) {
      setError("No account found with this email. Please sign up.");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password.");
      return;
    }

    // on success, save a simple auth flag and user info (demo)
    localStorage.setItem("auth", "true");
    localStorage.setItem("email", user.email);
    localStorage.setItem("name", user.name || "");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center
                    bg-gradient-to-b from-[#ffffff] via-[#98cdd4] to-[#e3edee] px-4">

      <h1 className="text-grey-600 text-4xl font-extrabold mb-8 tracking-wide">SkillHire</h1>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Welcome back!</h2>
        <p className="text-center text-gray-600 mb-8">Enter your details to access your account.</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Student Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
            />
          </div>

          {error && <p className="text-red-600 text-center text-sm -mt-3">{error}</p>}

          <div className="flex justify-end">
            <Link className="text-teal-900 text-sm font-semibold" to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-teal-400 text-white font-semibold text-lg transition"
          >
            Log in
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account? <Link to="/signup" className="text-teal-800 font-bold">Sign up</Link>
        </p>
      </div>
    </div>
  );
}