import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import StudentForm from "../components/StudentForm";
import api from "../services/api";

function AddStudent() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (formData) => {
    try {
      setErrorMessage(""); // Clear past errors on retry
      await api.post("students/", formData);
      navigate("/students");
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to create student record. Please verify details and try again.");
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-2xl">
        
        <div className="mb-6 flex items-center justify-between">
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

        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Add New Student
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Create an entry in the school database system. New profiles are instantly accessible by administrative personnel.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50/50 p-4 animate-fade-in">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-red-900">Form Error Encountered</h4>
              <p className="mt-0.5 text-xs text-red-600/90">{errorMessage}</p>
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
          <StudentForm onSubmit={handleSubmit} />
        </div>

      </div>
    </Layout>
  );
}

export default AddStudent;