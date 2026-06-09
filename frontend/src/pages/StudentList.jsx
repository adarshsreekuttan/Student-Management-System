import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import StudentTable from "../components/StudentTable";
import api from "../services/api";

function StudentList() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await api.get("students/");

      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`students/${id}/`);

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Students
          </h1>

          <p className="text-slate-500 mt-2">
            Manage all student records
          </p>
        </div>

        <Link
          to="/students/add"
          className="bg-indigo-600 text-white px-5 py-3 rounded-xl"
        >
          Add Student
        </Link>
      </div>

      <StudentTable
        students={students}
        onDelete={handleDelete}
      />
    </Layout>
  );
}

export default StudentList;