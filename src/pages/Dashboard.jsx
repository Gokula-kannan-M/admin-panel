import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import Header from "../components/Header";
import { StatsCard } from "../components/StatsCard";
import ModuleCard from "../components/ModuleCard";

const chartData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
];

export default function Dashboard() {
  return (
    <div>
      <Header />

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Revenue" value="₹2,50,000" />
        <StatsCard title="Available Cameras" value="85 Units" />
        <StatsCard title="Active Rentals" value="18" />
        <StatsCard title="Pending Deliveries" value="6" />
      </div>

      {/* Chart Section 👇 */}
      <div className="bg-white p-5 rounded-2xl mt-8 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>

        <div className="overflow-x-auto">
          <BarChart width={600} height={250} data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" />
          </BarChart>
        </div>
      </div>

      {/* Business Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <ModuleCard
          title="Camera Rentals"
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
