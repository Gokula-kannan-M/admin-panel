import { useEffect, useState } from "react";

export default function Rentals() {
  const [loading, setLoading] = useState(true);
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    // Fake API delay
    setTimeout(() => {
      setRentals([
        {
          id: "R001",
          product: "Sony A7 III",
          customer: "Arun Kumar",
          returnDate: "2026-04-02",
          status: "Active",
        },
        {
          id: "R002",
          product: "Canon EOS R6",
          customer: "Vignesh",
          returnDate: "2026-03-28",
          status: "Due Soon",
        },
        {
          id: "R003",
          product: "Nikon D850",
          customer: "Rahul",
          returnDate: "2026-03-20",
          status: "Overdue",
        },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading rentals...</p>;
  }

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Studio Rentals</h1>

      {/* Rentals Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Rental ID</th>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Return Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {rentals.map((item, i) => (
              <tr key={i} className="border-t hover:bg-gray-50 transition">
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.product}</td>
                <td className="p-3">{item.customer}</td>
                <td className="p-3">{item.returnDate}</td>

                {/* Status Badge */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Due Soon"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
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