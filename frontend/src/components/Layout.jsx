import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-slate-50 font-sans antialiased selection:bg-blue-500/10 selection:text-blue-600">
      {/* Decorative SaaS Background Blobs - Creates depth without boxy lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute top-1/4 -right-40 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      {/* Structural Wrapper */}
      <div className="relative flex min-h-screen flex-col">
        {/* Sticky Header Zone */}
        <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all duration-200">
          <Navbar />
        </header>

        {/* Main Canvas Area */}
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
            {/* Smooth Page Mount Wrapper */}
            <div className="animate-fade-in">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;