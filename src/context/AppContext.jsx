import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [deliveries, setDeliveries] = useState([]);

  return (
    <AppContext.Provider
      value={{
        customers, setCustomers,
        inventory, setInventory,
        rentals, setRentals,
        deliveries, setDeliveries,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);