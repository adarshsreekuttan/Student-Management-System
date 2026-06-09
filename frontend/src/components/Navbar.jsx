import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <div>
          <h1 className="text-xl font-bold text-indigo-600">
            School Management
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/dashboard"
            className="text-slate-600 hover:text-indigo-600 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/students"
            className="text-slate-600 hover:text-indigo-600 transition"
          >
            Students
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;