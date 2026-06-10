import React from 'react';

function DashboardCard({ title, value }) {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 border border-slate-200/60 sm:max-w-sm">
      {/* Subtle SaaS Gradient Top Border on Hover */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="flex items-start justify-between">
        <h3 className="font-medium tracking-wide text-slate-500 text-sm">
          {title}
        </h3>
        
        {/* Abstract decorative element replacing the need for an explicit icon prop */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100/50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-100">
          <svg className="h-5 w-5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <p className="text-3xl font-bold tracking-tight text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

export default DashboardCard;