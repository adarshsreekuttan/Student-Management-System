import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `relative text-sm font-medium transition-colors duration-200 py-1.5 px-3 rounded-lg ${
      isActive 
        ? "text-blue-600 bg-blue-50/80" 
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
    }`;
  };

  return (
    <nav className="w-full bg-white/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <span className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
              EduPulse
            </span>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Link to="/dashboard" className={getLinkClass("/dashboard")}>
              Dashboard
            </Link>
            <Link to="/students" className={getLinkClass("/students")}>
              Students
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <div className="h-4 w-px bg-slate-200" /> {/* Divider */}
            
            <button
              onClick={handleLogout}
              className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/20"
            >
              <span>Logout</span>
              <svg className="h-4 w-4 text-slate-400 transition-colors group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 max-h-0 ${isOpen ? "max-h-60 border-b border-slate-200 bg-white" : ""}`}>
        <div className="space-y-1.5 px-4 pb-4 pt-2">
          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className={`block rounded-xl px-4 py-2.5 text-base font-medium ${location.pathname === "/dashboard" ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"}`}
          >
            Dashboard
          </Link>
          <Link
            to="/students"
            onClick={() => setIsOpen(false)}
            className={`block rounded-xl px-4 py-2.5 text-base font-medium ${location.pathname === "/students" ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"}`}
          >
            Students
          </Link>
          
          <div className="my-2 h-px bg-slate-100" />
          
          <button
            onClick={() => { setIsOpen(false); handleLogout(); }}
            className="flex w-full items-center justify-between rounded-xl bg-red-50 px-4 py-2.5 text-base font-medium text-red-600 hover:bg-red-100"
          >
            <span>Logout</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;