import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Delivery from "./pages/Delivery";
import Rentals from "./pages/Rentals";
import Sidebar from "./components/Sidebar";
import Customers from "./pages/Customers";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}