import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const readUsers = () => {
    try {
      return JSON.parse(localStorage.getItem("users") || "[]");
    } catch {
      return [];
    }
  };

  const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password || !confirm) {
      setError("Please fill all fields.");
      return;
    }
    if (password.length < 4) {
      setError("Password must be at least 4 characters (demo only).");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setSaving(true);

    const users = readUsers();
    const normalizedEmail = email.trim().toLowerCase();
    const exists = users.some((u) => u.email === normalizedEmail);
    if (exists) {
      setSaving(false);
      setError("An account with this email already exists. Please login.");
      return;
    }

    // DEMO: save plain text password — replace with real backend in production
    users.push({ name: name.trim(), email: normalizedEmail, password });
    saveUsers(users);

    // small delay for UX then redirect to login
    setTimeout(() => {
      setSaving(false);
      navigate("/login");
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] via-[#98cdd4] to-[#e3edee] px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-teal-600">Create an Account</h1>
        <p className="text-center text-gray-500 mt-2 mb-6">Join SkillHire to explore opportunities</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Confirm Password</label>
            <input
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              type="password"
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Re-enter password"
            />
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-gradient-to-r from-sky-500 to-teal-400 text-white p-3 rounded-lg font-semibold hover:opacity-95 transition disabled:opacity-60"
          >
            {saving ? "Creating account…" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-700 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}