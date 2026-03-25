import { useNavigate } from "react-router-dom";

export default function ModuleCard({ title, desc, button, path }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">{desc}</p>

      <button
        onClick={() => navigate(path)}
        className="px-4 py-2 bg-black text-white rounded-xl text-sm cursor-pointer"
      >
        {button}
      </button>
    </div>
  );
}