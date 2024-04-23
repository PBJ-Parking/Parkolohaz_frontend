import { Navigate, Outlet } from "react-router-dom";
import Navigacio from "../components/Navigacio";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuthContext from "../contexts/AuthContext";

const Layout = () => {
  const { utvonalValaszto } = useAuthContext();
  const { role } = utvonalValaszto();

  if (role !== "admin" && role !== "user") {
    return (
      <main>
        <Header
          bal={"belepes"}
          balOldali={"Belépés"}
          jobb={"regisztracio"}
          jobbOldali={"Regisztráció"}
          balIkon={"bi bi-box-arrow-in-right"}
          jobbIkon={"bi bi-person-plus-fill"}
        />
        <Navigacio isLoggedIn={false} />
        <Outlet />
        <Footer />
      </main>
    );
  }
  
  if (role === "user") {
    return <Navigate to="/loggedIn" />;
  }

  if (role === "admin") {
    return <Navigate to="/admin" />;
  }

};
export default Layout;
