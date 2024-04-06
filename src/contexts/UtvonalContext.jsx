import { createContext, useContext } from "react";
import { admin_routes } from "../routes/admin_routes";
import { felhasznalo_routes } from "../routes/felhasznalo_routes";
import { vendeg_routes } from "../routes/vendeg_routes";

const UtvonalContext = createContext();

export const UtvonalProvider = ({ children }) => {
  function utvonalValaszto(user) {
    if (user === null) {
      return { home: "/", routes: vendeg_routes };
    }

    if (user !== null && user.admin_e == 0) {
      return { home: "/loggedIn", routes: felhasznalo_routes };
    }

    if (user !== null && user.admin_e === 1) {
      return { home: "/admin", routes: admin_routes };
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
