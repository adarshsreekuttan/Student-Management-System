import { Link } from "react-router-dom";

function StudentTable({ students, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Phone</th>
            <th className="text-left p-4">Grade</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-t border-slate-100"
            >
              <td className="p-4">{student.name}</td>
              <td className="p-4">{student.email}</td>
              <td className="p-4">{student.phone}</td>
              <td className="p-4">{student.grade}</td>

              <td className="p-4 flex gap-2">
                <Link
                  to={`/students/edit/${student.id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg"
                >
                  Edit
                </Link>

                <button
                  onClick={() => onDelete(student.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;