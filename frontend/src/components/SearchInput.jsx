import React from "react";

function SearchInput({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          type="text"
          placeholder={placeholder}
          value={value}
          // Explicitly pass the native event up to the parent component
          onChange={(e) => onChange(e)} 
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
        />
      </div>
    </div>
  );
}

export default SearchInput;