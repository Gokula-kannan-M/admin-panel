import { useEffect, useState } from "react";

export default function Customers() {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCustomers([
        {
          id: "C001",
          name: "Arun Kumar",
          phone: "9876543210",
          email: "arun@gmail.com",
          status: "Active",
        },
        {
          id: "C002",
          name: "Vignesh",
          phone: "9123456780",
          email: "vignesh@gmail.com",
          status: "Regular",
        },
        {
          id: "C003",
          name: "Rahul",
          phone: "9988776655",
          email: "rahul@gmail.com",
          status: "New",
        },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading customers...</p>;
  }

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Customers</h1>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Customer ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-3">{c.id}</td>
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.phone}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}