export function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-xl font-bold mt-2">{value}</h2>
    </div>
  );
}