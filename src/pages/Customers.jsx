import { useApp } from "../context/AppContext";

export default function Customers() {
  const { customers } = useApp();

  return (
    <div>
      <h1 className="text-xl mb-4">Customers</h1>

      {customers.length === 0 ? (
        <p>No customers</p>
      ) : (
        customers.map((c, i) => (
          <div key={i} className="bg-white p-2 mb-2 rounded shadow">
            {c.name}
          </div>
        ))
      )}
    </div>
  );
}