import { useEffect, useState } from "react";

export default function Delivery() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: "D001", status: "Pending" },
        { id: "D002", status: "Delivered" },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  if (loading) return <p>Loading deliveries...</p>;

  return (
    <div>
      <h1 className="text-xl mb-4">Delivery</h1>
      {data.map((d, i) => (
        <div key={i} className="bg-white p-4 mb-3 rounded-xl">
          <p>{d.id}</p>
          <p>{d.status}</p>
        </div>
      ))}
    </div>
  );
}