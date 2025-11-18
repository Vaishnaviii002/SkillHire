import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./LandingPage";
import Login from "./pages/Login";
import ForStudents from "./pages/ForStudents";
import ForCompanies from "./pages/ForCompanies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";

import BrowseJobs from "./pages/BrowseJobs";   // ✅ NEW IMPORT

/* Simple client-side protected route using localStorage "auth" flag.
   NOTE: For production use real server-side auth and token verification. */
function ProtectedRoute({ children }) {
  const isAuth = !!localStorage.getItem("auth");
  return isAuth ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Public pages */}
      <Route path="/companies" element={<ForCompanies />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* ⭐ Protected Browse Jobs Page */}
      <Route
        path="/jobs"
        element={
          <ProtectedRoute>
            <BrowseJobs />
          </ProtectedRoute>
        }
      />

      {/* Protected dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <ForStudents />
          </ProtectedRoute>
        }
      />

      {/* keep /students if used elsewhere (optional) */}
      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <ForStudents />
          </ProtectedRoute>
        }
      />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
