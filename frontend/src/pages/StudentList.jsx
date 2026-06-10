import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import StudentTable from "../components/StudentTable";
import SearchInput from "../components/SearchInput"; // Imported our clean component
import api from "../services/api";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  const fetchStudents = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("students/");
      setStudents(response.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const triggerDeleteConfirmation = (id) => {
    setDeleteTargetId(id);
  };

  const executeDelete = async () => {
    if (!deleteTargetId) return;
    try {
      await api.delete(`students/${deleteTargetId}/`);
      setDeleteTargetId(null);
      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredStudents = students.filter((student) => {
    // If no search query exists, show the student immediately
    if (!searchQuery) return true;

    const query = searchQuery.toLowerCase().trim();

    // Explicitly check for null/undefined fields and convert them to safe fallback strings
    const studentName = student.name ? String(student.name).toLowerCase() : "";
    const studentEmail = student.email ? String(student.email).toLowerCase() : "";
    const studentPhone = student.phone ? String(student.phone) : "";

    // Perform the search comparison safely
    return (
      studentName.includes(query) ||
      studentEmail.includes(query) ||
      studentPhone.includes(query)
    );
  });

  return (
    <Layout>
      <div className="[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        
        {/* Main Header Row Action Stack */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8 border-b border-slate-100 pb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Students Directory
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Maintain, filter, modify, and audit all active institutional student profiles.
            </p>
          </div>

          <Link
            to="/students/add"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/10 transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 focus:outline-none focus:ring-4 focus:ring-blue-500/20 active:scale-[0.98] self-start sm:self-center"
          >
            Add Student
          </Link>
        </div>

        {/* Refactored Search Component Section */}
        <div className="mb-6">
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, email, or phone"
          />
        </div>

        {/* Main Data Render Track Container */}
        <div className="rounded-2xl border border-slate-200/60 bg-white shadow-sm overflow-hidden">
          {isLoading ? (
            <div className="p-6 space-y-4 animate-pulse">
              <div className="h-8 w-full bg-slate-50 rounded-lg" />
              <div className="h-12 w-full bg-slate-100 rounded-xl" />
              <div className="h-12 w-full bg-slate-100 rounded-xl" />
              <div className="h-12 w-full bg-slate-100 rounded-xl" />
            </div>
          ) : (
            <StudentTable
              students={filteredStudents}
              onDelete={triggerDeleteConfirmation}
            />
          )}
        </div>

        {/* Premium State-driven SaaS Confirmation Modal Backdrop Overlay */}
        {deleteTargetId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl scale-[1.01] transition-transform duration-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Remove Student Profile</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                Are you absolutely sure? This action will permanently purge this record from the central cloud registry database. This process cannot be undone.
              </p>
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  onClick={() => setDeleteTargetId(null)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  onClick={executeDelete}
                  className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-red-600/10 transition-colors hover:bg-red-700 focus:outline-none"
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}

export default StudentList;