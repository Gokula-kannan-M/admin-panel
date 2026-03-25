import { useEffect, useState } from "react";
export default function Inventory() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [product, setProduct] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData([
        { name: "Canon EOS R5", stock: 10 },
        { name: "Sony A7 III", stock: 15 },
      ]);
      setLoading(false);
      toast.success("Data Loaded");
    }, 1500);
  }, []);

  const handleAdd = () => {
    if (!product) return;
    setData([...data, { name: product, stock: 5 }]);
    setProduct("");
    toast.success("Product Added");
  };

  if (loading) return <p>Loading inventory...</p>;

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Inventory</h1>

      {/* Add Form */}
      <div className="flex gap-2 mb-4">
        <input
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Add product"
          className="border p-2 rounded"
        />
        <button onClick={handleAdd} className="bg-black text-white px-4 rounded">
          Add
        </button>
      </div>

      {/* Table */}
      <table className="w-full bg-white rounded-xl">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Product</th>
            <th className="p-3">Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border-t">
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}