import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "../components/Layout";
import StudentForm from "../components/StudentForm";
import api from "../services/api";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchStudent = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      const response = await api.get(`students/${id}/`);
      setStudent(response.data);
    } catch (error) {
      console.log(error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await api.put(`students/${id}/`, formData);
      navigate("/students");
    } catch (error) {
      console.log(error);
    }
  };

  // 1. Premium Loading Skeleton State
  if (isLoading) {
    return (
      <Layout>
        <div className="mx-auto max-w-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="mb-6 h-5 w-32 animate-pulse rounded bg-slate-200" />
          <div className="mb-8 space-y-2">
            <div className="h-9 w-48 animate-pulse rounded-lg bg-slate-200" />
            <div className="h-4 w-72 animate-pulse rounded bg-slate-200" />
          </div>
          <div className="h-[450px] w-full animate-pulse rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-10" />
        </div>
      </Layout>
    );
  }

  // 2. Clear Error Fallback State
  if (hasError) {
    return (
      <Layout>
        <div className="mx-auto max-w-md py-12 text-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="mt-4 text-base font-semibold text-slate-900">Failed to load profile</h3>
          <p className="mt-1.5 text-sm text-slate-500">The student record may have been deleted or the network connection timed out.</p>
          <button
            onClick={() => navigate("/students")}
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-900"
          >
            Return to directory
          </button>
        </div>
      </Layout>
    );
  }

  // 3. Main Operational Profile Render Frame
  return (
    <Layout>
      <div className="mx-auto max-w-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        
        {/* Modern Contextual Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/students")}
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-slate-900"
          >
            <svg 
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to directory</span>
          </button>
        </div>

        {/* Section Heading Titles */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Edit Student Record
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Modify structural information details for <span className="font-semibold text-slate-800">{student?.name || "this student"}</span>. Changes commit immediately across the directory system.
          </p>
        </div>

        {/* Content Form Shell */}
        <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
          <StudentForm
            initialData={student}
            onSubmit={handleSubmit}
          />
        </div>

      </div>
    </Layout>
  );
}

export default EditStudent;