import Layout from "../components/Layout";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <Layout>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back, Admin.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">

        <DashboardCard
          title="Total Students"
          value="0"
        />

        <DashboardCard
          title="Active User"
          value="Admin"
        />

        <DashboardCard
          title="System Status"
          value="Online"
        />

      </div>

    </Layout>
  );
}

export default Dashboard;