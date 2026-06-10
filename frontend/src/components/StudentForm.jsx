import React, { useState, useEffect } from "react";

function StudentForm({ initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    date_of_birth: "",
    address: "",
  });

  useEffect(() => {
    if (Object.keys(initialData).length > 0) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Shared classes to keep input styling clean, unified, and perfectly accessible
  const inputTheme = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";
  const labelTheme = "block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-10"
    >
      {/* Form Header Section */}
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">
          {Object.keys(initialData).length > 0 ? "Modify Profile" : "Register Student"}
        </h2>
        <p className="mt-1.5 text-sm text-slate-500">
          Provide primary contact info, grade placement, and credentials below.
        </p>
      </div>

      {/* Grid Fields Layout */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
        
        {/* Full Name */}
        <div className="sm:col-span-3">
          <label className={labelTheme}>Student Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={handleChange}
            className={inputTheme}
            required
          />
        </div>

        {/* Grade */}
        <div className="sm:col-span-3">
          <label className={labelTheme}>Grade Level</label>
          <input
            type="text"
            name="grade"
            placeholder="e.g. Grade 10-A"
            value={formData.grade}
            onChange={handleChange}
            className={inputTheme}
            required
          />
        </div>

        {/* Email Address */}
        <div className="sm:col-span-3">
          <label className={labelTheme}>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@school.com"
            value={formData.email}
            onChange={handleChange}
            className={inputTheme}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="sm:col-span-3">
          <label className={labelTheme}>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className={inputTheme}
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="sm:col-span-6 md:col-span-3">
          <label className={labelTheme}>Date of Birth</label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            className={inputTheme}
            required
          />
        </div>

        {/* Full Residential Address */}
        <div className="sm:col-span-6">
          <label className={labelTheme}>Residential Address</label>
          <textarea
            name="address"
            placeholder="Street address, apartment, city, state, and zip code..."
            value={formData.address}
            onChange={handleChange}
            className={`${inputTheme} resize-none`}
            rows="4"
            required
          />
        </div>
      </div>

      {/* Modern Form Footers / Submission Action */}
      <div className="mt-8 flex justify-end border-t border-slate-100 pt-6">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/10 transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 focus:outline-none focus:ring-4 focus:ring-blue-500/20 active:scale-[0.98]"
        >
          Save Student Record
        </button>
      </div>
    </form>
  );
}

export default StudentForm;