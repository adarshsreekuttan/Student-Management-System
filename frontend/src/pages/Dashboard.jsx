import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import DashboardCard from "../components/DashboardCard";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();
  const [studentCount, setStudentCount] = useState(0);
  const [recentStudents, setRecentStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchDashboardData() {
    try {
      setIsLoading(true);
      const response = await api.get("students/");
      
      const rawStudents = response.data || [];
      setStudentCount(rawStudents.length);
      
      const sliced = rawStudents.slice(-5).reverse();
      setRecentStudents(sliced);
    } catch (error) {
      console.error("Error fetching dashboard statistics:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <Layout>
      <div className="mb-8 border-b border-slate-100 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Welcome back, Admin. Here is your operational overview.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <div className="h-[128px] w-full animate-pulse rounded-2xl border border-slate-200/60 bg-slate-50" />
        ) : (
          <DashboardCard title="Total Students" value={studentCount} />
        )}

        <DashboardCard title="Active User" value="Admin" />
        <DashboardCard title="System Status" value="Online" />
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200/60 bg-white shadow-sm overflow-hidden">
        
        <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Recent Registrations
            </h2>
            <p className="mt-0.5 text-xs text-slate-400">
              The latest student profiles added to the registry ecosystem.
            </p>
          </div>
          
          <button
            onClick={() => navigate("/students")}
            className="group inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-600 transition-all duration-200 hover:border-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 active:scale-[0.98] sm:w-auto sm:py-2"
          >
            <span>View full directory</span>
            <svg 
              className="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-slate-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        <div className="divide-y divide-slate-50 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {isLoading ? (
            [1, 2, 3].map((skeletonKey) => (
              <div key={skeletonKey} className="flex items-center justify-between px-6 py-4 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-slate-100" />
                  <div className="space-y-1.5">
                    <div className="h-3.5 w-32 rounded bg-slate-100" />
                    <div className="h-3 w-48 rounded bg-slate-100" />
                  </div>
                </div>
                <div className="h-5 w-16 rounded-lg bg-slate-100" />
              </div>
            ))
          ) : recentStudents.length > 0 ? (
            recentStudents.map((student) => (
              <div 
                key={student.id} 
                className="flex items-center justify-between gap-4 px-6 py-4 transition-colors duration-150 hover:bg-slate-50/40"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 font-bold text-blue-600 border border-blue-100/30 text-xs">
                    {student.name ? student.name.charAt(0).toUpperCase() : "S"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-medium text-slate-900 truncate">
                      {student.name}
                    </h4>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {student.email}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <span className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-inset ring-slate-500/10 whitespace-nowrap">
                    {student.grade}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-12 text-center">
              <p className="text-sm font-medium text-slate-400">
                No recent activity records found.
              </p>
            </div>
          )}
        </div>

      </div>
    </Layout>
  );
}

export default Dashboard;