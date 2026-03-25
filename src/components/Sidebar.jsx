import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-5 min-h-screen">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/delivery">Delivery</Link>
        <Link to="/rentals">Rentals</Link>
      </nav>
    </div>
  );
}