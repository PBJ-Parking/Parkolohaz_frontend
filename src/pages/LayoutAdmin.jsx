import Header from "../components/Header";
import useAuthContext from "../contexts/AuthContext";
import Footer from "../components/Footer";
import AdminNav from "../components/AdminNav";
import { Navigate, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  const { logout, utvonalValaszto } = useAuthContext();
  const { role } = utvonalValaszto();

  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  if (role === "admin") {
    return (
      <main>
        <Header
          home={"admin"}
          bal={"admin/profil"}
          balOldali={"Profilom"}
          jobb={""}
          jobbOldali={"Kijelentkezés"}
          jobbIkon={"bi bi-box-arrow-left"}
          balIkon={"bi bi-person-lines-fill"}
          jobbEsemeny={logout}
        />
        <AdminNav />
        <Outlet />
        <Footer home={"/admin"} />
      </main>
    );
  }
};
export default LayoutAdmin;
