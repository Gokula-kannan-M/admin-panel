import { useApp } from "../context/AppContext";

export default function Rentals() {
  const { rentals, setRentals } = useApp();

  const handleReturn = (index) => {
    const updated = [...rentals];
    updated[index].status = "Returned";
    setRentals(updated);
  };

  const handleNotReturn = (index) => {
    const updated = [...rentals];
    updated[index].status = "Not Returned";
    setRentals(updated);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">
        Rentals
      </h1>

      {rentals.length === 0 ? (
        <p className="text-gray-500">No rentals</p>
      ) : (
        rentals.map((r, i) => (
          <div
            key={i}
            className="bg-white p-4 mb-3 rounded-2xl shadow-md border border-gray-100 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-gray-800">
                {r.product} - {r.customer}
              </p>
              <p className="text-sm mt-1">
                Status:{" "}
                <span
                  className={`font-medium ${
                    r.status === "Returned"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {r.status}
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => handleReturn(i)}
                className="px-4 py-1.5 rounded-lg text-sm font-medium 
                bg-green-100 text-green-700 hover:bg-green-200 transition"
              >
                Returned
              </button>

              <button
                onClick={() => handleNotReturn(i)}
                className="px-4 py-1.5 rounded-lg text-sm font-medium 
                bg-red-100 text-red-600 hover:bg-red-200 transition"
              >
                Not Returned
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}