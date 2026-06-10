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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(initialData).length > 0) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

    const validateForm = () => {
      const newErrors = {};

      if (
        formData.name.trim().length < 3 ||
        !/^[A-Za-z ]+$/.test(formData.name)
      ) {
        newErrors.name =
          "Name must contain only letters and be at least 3 characters";
      }

      if (!["A", "B", "C", "D", "E", "F"].includes(formData.grade)) {
        newErrors.grade = "Please select a grade";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }

      const phoneRegex = /^[6-9]\d{9}$/;

      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone =
          "Enter a valid 10-digit Indian mobile number";
      }

      if (formData.address.trim().length < 5) {
        newErrors.address =
          "Address must be at least 5 characters";
      }

      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formData);
  };

  const inputTheme = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";
  const labelTheme = "block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-10"
    >
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">
          {Object.keys(initialData).length > 0 ? "Modify Profile" : "Register Student"}
        </h2>
        <p className="mt-1.5 text-sm text-slate-500">
          Provide primary contact info, grade placement, and credentials below.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
        
        <div className="sm:col-span-3">
          <label className={labelTheme}>Student Name</label>

          <input
            type="text"
            name="name"
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={handleChange}
            className={inputTheme}
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <label className={labelTheme}>Grade</label>

          <select
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className={inputTheme}
          >
            <option value="">Select Grade</option>
            <option value="A">Grade A</option>
            <option value="B">Grade B</option>
            <option value="C">Grade C</option>
            <option value="D">Grade D</option>
            <option value="E">Grade E</option>
            <option value="F">Grade F</option>
          </select>

          {errors.grade && (
            <p className="mt-1 text-sm text-red-500">
              {errors.grade}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <label className={labelTheme}>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="johndoe@school.com"
            value={formData.email}
            onChange={handleChange}
            className={inputTheme}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <label className={labelTheme}>Phone Number</label>

          <input
            type="tel"
            name="phone"
            placeholder="9876543210"
            value={formData.phone}
            onChange={handleChange}
            className={inputTheme}
            maxLength={10}
            inputMode="numeric"
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

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

          {errors.date_of_birth && (
            <p className="mt-1 text-sm text-red-500">
              {errors.date_of_birth}
            </p>
          )}
        </div>

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
          {errors.address && (
            <p className="mt-1 text-sm text-red-500">
              {errors.address}
            </p>
          )}
        </div>
      </div>

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