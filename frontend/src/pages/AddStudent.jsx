import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import StudentForm from "../components/StudentForm";
import api from "../services/api";

function AddStudent() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await api.post("students/", formData);

      navigate("/students");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Add Student
        </h1>

        <StudentForm onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
}

export default AddStudent;