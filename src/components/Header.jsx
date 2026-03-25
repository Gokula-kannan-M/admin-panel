import { Search } from "lucide-react";
import { Input } from "../components/ui/Input";

export default function Header() {
  return (
    <div className="flex justify-between mb-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="relative">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        <Input placeholder="Search..." className="pl-9" />
      </div>
    </div>
  );
}