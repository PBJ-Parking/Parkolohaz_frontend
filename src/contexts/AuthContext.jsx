import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [jarmu, setJarmu] = useState(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    megrendelo_tipus: "",
    adoszam: "",
  });
  //const csrf = () => axios.get("/sanctum/csrf-cookie");
  let token = "";
  const csrf = () =>
    axios.get("/token").then((response) => {
      //console.log(response);
      token = response.data;
    });

  //bejelentkezett felhasználó adatainak lekérdezése
  const getUser = async () => {
    const { data } = await axios.get("/api/authUser");
    setUser(data);
    //console.log(data)
  };
  const logout = async () => {
    await csrf();
    //console.log(token)
    axios.post("/logout", { _token: token }).then((resp) => {
      setUser(null);
      console.log(resp);
    });
    navigate("/");
  };

  const utvonalValaszto = () => {
    if (user === null) {
      return { role: "guest", home: "" };
    }

    if (user !== null && user.admin_e == 0) {
      return { role: "user", home: "/loggedIn" };
    }

    if (user !== null && user.admin_e === 1) {
      return { role: "admin", home: "/admin" };
    }
  };

  const profileAdatLekeres = async () => {
    const { data } = await axios.get("api/authAdatok");

    setJarmu(data);
    console.log(data);
  };

  const loginReg = async ({ ...adat }, vegpont) => {
    await csrf();
    adat._token = token;
    try {
      await axios.post(vegpont, adat);
      await getUser();
      await profileAdatLekeres();
      navigate("/loggedIn");
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
        console.log(errors);
      }
    }
  };

  const userUpdate = async (field, newValue) => {
    try {
      // Lekérjük a CSRF tokent
      const { data: token } = await axios.get("/token");

      // Beállítjuk az Axios fejlécét
      axios.defaults.headers.common["X-CSRF-TOKEN"] = token;

      // Frissítjük a felhasználói adatokat a szerveren
      const response = await axios.patch(`api/felhasznalo/${user.id}`, {
        [field]: newValue,
      });
      //console.log([field], newValue)
      if (response.status === 200) {
        // Sikeres frissítés esetén frissítjük a felhasználói adatokat a frontend-en is
        setUser({ ...user, [field]: newValue });
      } else {
        console.error("Hiba történt a felhasználói adatok frissítése közben");
      }
    } catch (error) {
      console.error(
        "Hiba történt a felhasználói adatok frissítése közben",
        error
      );
    }
  };

  const jarmuUpdate = async (field, newValue) => {
    try {
      // Lekérjük a CSRF tokent
      const { data: token } = await axios.get("/token");

      // Beállítjuk az Axios fejlécét
      axios.defaults.headers.common["X-CSRF-TOKEN"] = token;

      // Frissítjük a felhasználói adatokat a szerveren
      const response = await axios.patch(`api/jarmu/${jarmu.jarmu_id}`, {
        [field]: newValue,
      });
      console.log([field], newValue);
      if (response.status === 200) {
        // Sikeres frissítés esetén frissítjük a felhasználói adatokat a frontend-en is
        setJarmu({ ...jarmu, [field]: newValue });
        console.log(jarmu, [field], newValue);
        console.log("Benne vagyok");
      } else {
        console.error("Hiba történt a felhasználói adatok frissítése közben");
      }
    } catch (error) {
      console.error(
        "Hiba történt a felhasználói adatok frissítése közben",
        error
      );
    }
  };

  const hibaNullaz = () => {
    setErrors({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      megrendelo_tipus: "",
      adoszam: "",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        hibaNullaz,
        logout,
        loginReg,
        errors,
        getUser,
        user,
        profileAdatLekeres,
        jarmu,
        userUpdate,
        jarmuUpdate,
        utvonalValaszto,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
