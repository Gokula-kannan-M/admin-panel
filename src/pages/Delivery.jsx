import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Delivery() {
  const { deliveries, setDeliveries, setCustomers, setRentals, setInventory } =
    useApp();

  const [form, setForm] = useState({
    item: "",
    customer: "",
    status: "Pending",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [confirmIndex, setConfirmIndex] = useState(null);

  // 🔥 SYNC ALL DATA FROM DELIVERY
  const syncData = (updatedDeliveries) => {
    const delivered = updatedDeliveries.filter((d) => d.status === "Delivered");

    // Customers
    const customers = [...new Set(delivered.map((d) => d.customer))].map(
      (name) => ({ name }),
    );

    // Rentals
    const rentals = delivered.map((d) => ({
      product: d.item,
      customer: d.customer,
      status: "Not Returned",
    }));

    setCustomers(customers);
    setRentals(rentals);

    // Inventory reduce
    setInventory((prev) =>
      prev.map((item) => {
        const used = delivered.filter((d) => d.item === item.name).length;
        return { ...item, stock: Math.max(0, item.stock - used) };
      }),
    );
  };

  // ✅ ADD / UPDATE
  const handleSave = () => {
    if (!form.item || !form.customer) return;

    let updated;

    if (editIndex !== null) {
      updated = deliveries.map((d, i) => (i === editIndex ? form : d));
      setEditIndex(null);
    } else {
      updated = [...deliveries, form];
    }

    setDeliveries(updated);
    syncData(updated);

    setForm({ item: "", customer: "", status: "Pending" });
  };

  // ✅ STATUS
  const updateStatus = (index, status) => {
    const updated = deliveries.map((d, i) =>
      i === index ? { ...d, status } : d,
    );

    setDeliveries(updated);
    syncData(updated);
  };

  // ✅ EDIT
  const handleEdit = (i) => {
    setForm(deliveries[i]);
    setEditIndex(i);
  };

  // ✅ DELETE
  const handleDelete = (i) => {
    const updated = deliveries.filter((_, index) => index !== i);
    setDeliveries(updated);
    syncData(updated);
    setConfirmIndex(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">🚚 Delivery Control Panel</h1>

      {/* FORM */}
      <div className="flex gap-3 mb-6">
        <input
          placeholder="Product"
          value={form.item}
          onChange={(e) => setForm({ ...form, item: e.target.value })}
          className="border p-2 rounded-lg"
        />
        <input
          placeholder="Customer"
          value={form.customer}
          onChange={(e) => setForm({ ...form, customer: e.target.value })}
          className="border p-2 rounded-lg"
        />

        <button
          onClick={handleSave}
          className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* LIST */}
      {deliveries.length === 0 ? (
        <p className="text-gray-500">No deliveries</p>
      ) : (
        deliveries.map((d, i) => (
          <div
            key={i}
            className="bg-white p-5 mb-4 rounded-2xl shadow-md border border-gray-100"
          >
            {/* ✅ PREMIUM CONFIRM UI */}
            {confirmIndex === i && (
              <div className="mb-4 p-4 rounded-xl border border-red-200 bg-red-50 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-600">
                    Are you sure you want to delete this delivery?
                  </p>
                  <p className="text-xs text-gray-500">
                    This action cannot be undone.
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleDelete(i)}
                    className="px-4 py-1.5 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    Yes, Delete
                  </button>

                  <button
                    onClick={() => setConfirmIndex(null)}
                    className="px-4 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <p className="font-semibold text-gray-800">
              {d.item} - {d.customer}
            </p>

            <span
              className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${
                d.status === "Delivered"
                  ? "bg-green-100 text-green-600"
                  : d.status === "Cancelled"
                    ? "bg-red-100 text-red-600"
                    : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {d.status}
            </span>

            {/* 🔥 BUTTONS */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {/* Status Buttons */}
              <button
                onClick={() => updateStatus(i, "Delivered")}
                className="px-3 py-1.5 text-sm rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition"
              >
                Delivered
              </button>

              <button
                onClick={() => updateStatus(i, "Pending")}
                className="px-3 py-1.5 text-sm rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition"
              >
                Pending
              </button>

              <button
                onClick={() => updateStatus(i, "Cancelled")}
                className="px-3 py-1.5 text-sm rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
              >
                Cancel
              </button>

              {/* ✨ EDIT BUTTON */}
              <button
                onClick={() => handleEdit(i)}
                className="px-3 py-1.5 text-sm rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-50 transition"
              >
                Edit
              </button>

              {/* ✨ DELETE BUTTON */}
              <button
                onClick={() => setConfirmIndex(i)}
                className="px-3 py-1.5 text-sm rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
