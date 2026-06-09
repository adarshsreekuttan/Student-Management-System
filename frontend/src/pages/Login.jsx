import { useState } from "react";

import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("login/", { "username":username, "password":password})

      localStorage.setItem("accessToken", response.data.access)
      localStorage.setItem("refreshToken", response.data.refresh)

      navigate("/dashboard")
    }
    catch(error) {
      console.log(error)
      alert("invalid credentials")
    }
    console.log({ username, password });
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md bg-white rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] p-8 sm:p-10 transition-all">
        
        <div className="mb-8 sm:mb-10">
          <h1 className="text-3xl font-semibold text-slate-800 tracking-tight">
            Welcome
          </h1>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Sign in to manage your students.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          
          <div className="space-y-2">
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-slate-700 ml-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-slate-700 ml-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium py-3.5 px-4 rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-600/25 active:scale-[0.98]"
          >
            Sign In
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;