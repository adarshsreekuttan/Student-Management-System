import React from "react";
import { Link } from "react-router-dom";

function StudentTable({ students = [], onDelete }) {
  // Shared structural styling definitions
  const thTheme = "px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-500";
  const tdTheme = "px-6 py-4 text-sm text-slate-600 whitespace-nowrap";

  return (
    <div className="w-full rounded-2xl border border-slate-200/60 bg-white shadow-sm overflow-hidden">
      {/* Horizontal Scroll Area for Perfect Mobile UX */}
      <div className="w-full overflow-x-auto scrollbar-thin">
        <table className="w-full min-w-[800px] border-collapse text-left">
          {/* Table Header */}
          <thead className="bg-slate-50/70 border-b border-slate-200/50">
            <tr>
              <th className={thTheme}>Student Info</th>
              <th className={thTheme}>Email Address</th>
              <th className={thTheme}>Phone Number</th>
              <th className={thTheme}>Grade Level</th>
              <th className="px-6 py-3.5 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Actions</th>
            </tr>
          </thead>

          {/* Table Body Content tracks */}
          <tbody className="divide-y divide-slate-100 bg-white">
            {students.length > 0 ? (
              students.map((student) => (
                <tr
                  key={student.id}
                  className="group transition-colors duration-150 hover:bg-slate-50/60"
                >
                  {/* Student Info with Avatar Badge Mockup */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 font-semibold text-blue-600 border border-blue-100/50">
                        {student.name ? student.name.charAt(0).toUpperCase() : "S"}
                      </div>
                      <span className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        {student.name}
                      </span>
                    </div>
                  </td>
                  
                  <td className={tdTheme}>{student.email}</td>
                  
                  <td className={`${tdTheme} font-mono text-xs tracking-tight`}>
                    {student.phone}
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      {student.grade}
                    </span>
                  </td>

                  {/* Actions Column (Aligned Right for Clean SaaS Layout) */}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/students/edit/${student.id}`}
                        className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-all duration-150 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => onDelete(student.id)}
                        className="inline-flex items-center rounded-xl border border-transparent bg-white px-3 py-1.5 text-xs font-medium text-red-600 transition-all duration-150 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              /* Beautiful SaaS Default Empty State Condition */
              <tr>
                <td colSpan="5" className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-slate-900">No students registered</h3>
                  <p className="mt-1 text-xs text-slate-400">Get started by creating a new student record entry.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;