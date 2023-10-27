import React, { useCallback, useContext, useState } from "react";

export const DataContext = React.createContext({});

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  const handleUser = useCallback(
    (payload) => {
      if (!payload) {
        return setUser(null);
      }
      if (JSON.stringify(payload) !== JSON.stringify(user)) {
        setUser({ ...user, ...payload });
      }
    },
    [user, setUser]
  );

  const contextValue = {
    user,
    handleUser,
    cart,
    setCart,
    order,
    setOrder,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
