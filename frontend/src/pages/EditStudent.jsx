import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "../components/Layout";
import StudentForm from "../components/StudentForm";
import api from "../services/api";

function EditStudent() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await api.get(`students/${id}/`);

      setStudent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      await api.put(
        `students/${id}/`,
        formData
      );

      navigate("/students");
    } catch (error) {
      console.log(error);
    }
  };

  if (!student) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Edit Student
        </h1>

        <StudentForm
          initialData={student}
          onSubmit={handleSubmit}
        />
      </div>
    </Layout>
  );
}

export default EditStudent;