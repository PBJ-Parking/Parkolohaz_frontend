import { Navigate, Outlet } from "react-router-dom";
import Navigacio from "../components/Navigacio";
import Header from "../components/Header";

import useAuthContext from "../contexts/AuthContext";
import Footer from "../components/Footer";

const LoggedIn = () => {
  const { logout, utvonalValaszto } = useAuthContext();
  const { role } = utvonalValaszto();

  if (role !== "user") {
    return <Navigate to="/" />;
  }

  if (role === "user") {
    return (
      <main>
        <Header
          bal={"loggedIn/profil"}
          balOldali={"Profilom"}
          jobb={""}
          jobbOldali={"Kijelentkezés"}
          jobbIkon={"bi bi-box-arrow-left"}
          balIkon={"bi bi-person-lines-fill"}
          jobbEsemeny={logout}
        />
        <Navigacio isLoggedIn={true} foglalas={"loggedIn/foglalas"} />

        <Outlet />
        <Footer />
      </main>
    );
  }
};
export default LoggedIn;
