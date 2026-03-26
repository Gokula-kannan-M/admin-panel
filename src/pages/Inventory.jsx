import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Inventory() {
  const { inventory, setInventory } = useApp();

  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [form, setForm] = useState({
    name: "",
    stock: "",
    status: "Pending",
  });

  const handleSave = () => {
    if (!form.name || !form.stock) return;

    if (editingIndex !== null) {
      const updated = [...inventory];
      updated[editingIndex] = form;
      setInventory(updated);
      setEditingIndex(null);
    } else {
      setInventory([...inventory, form]);
    }

    setForm({ name: "", stock: "", status: "Pending" });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setForm(inventory[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure to delete?");
    if (!confirmDelete) return;

    setInventory(inventory.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Inventory</h1>

      <button
        onClick={() => setShowForm(true)}
        className="bg-black text-white px-4 py-2 rounded mb-4"
      >
        Add Product
      </button>

      {showForm && (
        <div className="bg-white p-4 rounded shadow mb-4">
          <input
            placeholder="Product"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 mr-2"
          />
          <input
            placeholder="Stock"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
            className="border p-2 mr-2"
          />

          <button onClick={handleSave} className="bg-green-500 text-white px-3">
            Save
          </button>
        </div>
      )}

      {inventory.map((item, i) => (
        <div key={i} className="bg-white p-3 mb-2 rounded shadow">
          <p>
            {item.name} - Stock: {item.stock}
          </p>

          <button onClick={() => handleEdit(i)} className="text-white px-5 py-1 bg-blue-500 mr-2 rounded">
            Edit
          </button>
          <button onClick={() => handleDelete(i)} className="text-white px-5 py-1 rounded bg-red-500">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
