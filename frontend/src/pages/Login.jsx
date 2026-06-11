import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState("");

  const handleInputChange = (setter) => (e) => {
    if (authError) setAuthError("");
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (isSubmitting) return false;

    setAuthError(""); 
    setIsSubmitting(true);

    try {
      const response = await api.post("login/", { 
        username: username.trim(), 
        password: password 
      });

      if (response && response.data && response.data.access) {
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
        navigate("/dashboard");
      } else {
        throw new Error("Malformed token response structure");
      }
    } catch (error) {
      console.error("Caught login exception safely on frontend:", error);
      
      setAuthError("The username or password you entered is incorrect. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }

    return false;
  };

  return (
    <div className="relative min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-8 font-sans antialiased overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-[440px] bg-white rounded-2xl border border-slate-200/50 p-8 sm:p-10 shadow-xl shadow-slate-100/40">
        
        <div className="flex items-center gap-2.5 mb-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-sm shadow-blue-500/20">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-tight text-slate-900">EduPulse Admin</span>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Welcome back
          </h1>
          <p className="text-slate-500 mt-1.5 text-sm">
            Sign in to access your student management platform.
          </p>
        </div>

        {authError && (
          <div className="mb-5 flex items-start gap-2.5 rounded-xl border border-red-100 bg-red-50/60 p-3.5 transition-all duration-300">
            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-red-100 text-red-600 mt-0.5">
              <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p className="text-xs leading-relaxed font-medium text-red-700">{authError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="space-y-1.5">
            <label htmlFor="username" className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={handleInputChange(setUsername)}
              placeholder="Enter your administrator username"
              className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-400"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handleInputChange(setPassword)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-400"
              required
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-sm shadow-blue-600/10 focus:outline-none focus:ring-4 focus:ring-blue-500/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Verifying credentials...</span>
              </div>
            ) : (
              <span>Sign In</span>
            )}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;