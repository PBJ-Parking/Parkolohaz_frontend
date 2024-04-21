import { createContext, useContext } from "react";

const UtvonalContext = createContext();

export const UtvonalProvider = ({ children }) => {
  function utvonalValaszto(user) {
    if (user === null) {
      return { role: "guest", home: "" };
    }

    if (user !== null && user.admin_e == 0) {
      return { role: "user", home: "/loggedIn" };
    }

    if (user !== null && user.admin_e === 1) {
      return { role: "admin", home: "/admin" };
    }
  }

  return (
    <UtvonalContext.Provider value={{ utvonalValaszto }}>
      {children}
    </UtvonalContext.Provider>
  );
};

export default function useUtvonalContext() {
  return useContext(UtvonalContext);
}
