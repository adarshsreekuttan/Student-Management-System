import { useState, useEffect } from "react";

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

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-sm space-y-5"
    >
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border rounded-xl px-4 py-3"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border rounded-xl px-4 py-3"
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border rounded-xl px-4 py-3"
        required
      />

      <input
        type="text"
        name="grade"
        placeholder="Grade"
        value={formData.grade}
        onChange={handleChange}
        className="w-full border rounded-xl px-4 py-3"
        required
      />

      <input
        type="date"
        name="date_of_birth"
        value={formData.date_of_birth}
        onChange={handleChange}
        className="w-full border rounded-xl px-4 py-3"
        required
      />

      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full border rounded-xl px-4 py-3"
        rows="4"
        required
      />

      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
      >
        Save Student
      </button>
    </form>
  );
}

export default StudentForm;