function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-slate-500 text-sm">
        {title}
      </h3>

      <p className="text-3xl font-bold text-slate-800 mt-3">
        {value}
      </p>
    </div>
  );
}

export default DashboardCard;