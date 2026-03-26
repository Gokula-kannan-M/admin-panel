import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import Header from "../components/Header";
import { StatsCard } from "../components/StatsCard";
import ModuleCard from "../components/ModuleCard";
import { useApp } from "../context/AppContext";

export default function Dashboard() {
  const { inventory, rentals, deliveries } = useApp();

  // 🔥 Dynamic Stats
  const totalStock = inventory.reduce(
    (sum, i) => sum + Number(i.stock || 0),
    0,
  );
  const activeRentals = rentals.filter((r) => r.status !== "Returned").length;
  const pendingDeliveries = deliveries.filter(
    (d) => d.status === "Pending",
  ).length;

  // 🔥 Dynamic Chart (based on rentals count)
  const chartData = [
    { name: "Rentals", value: rentals.length },
    {
      name: "Returned",
      value: rentals.filter((r) => r.status === "Returned").length,
    },
    { name: "Pending", value: activeRentals },
  ];

  return (
    <div>
      <Header />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Stock" value={totalStock} />
        <StatsCard title="Active Rentals" value={activeRentals} />
        <StatsCard title="Pending Deliveries" value={pendingDeliveries} />
        <StatsCard title="Total Rentals" value={rentals.length} />
      </div>

      {/* Chart */}
      <div className="bg-white p-5 rounded-2xl mt-8 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">System Overview</h2>

        <BarChart width={500} height={250} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </div>

      {/* Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <ModuleCard
          title="Rentals"
          desc="Manage bookings"
          button="View"
          path="/rentals"
        />
        <ModuleCard
          title="Inventory"
          desc="Manage stock"
          button="View"
          path="/inventory"
        />
        <ModuleCard
          title="Delivery"
          desc="Track dispatch"
          button="View"
          path="/delivery"
        />
        <ModuleCard
          title="Customers"
          desc="Customer data"
          button="View"
          path="/customers"
        />
      </div>
    </div>
  );
}
