import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";
import useAuthContext from "../contexts/AuthContext";

export default function Profile () {
  const { logout } = useAuthContext();

  return (
    <>
      <main>
        <Header
          bal={"profil"}
          balOldali={"Profilom"}
          jobb={""}
          jobbOldali={"Kijelentkezés"}
          jobbIkon={"bi bi-box-arrow-left"}
          balIkon={"bi bi-person-lines-fill"}
          jobbEsemeny ={logout}
        />
        <Nav />
        <Outlet />
      </main>
    </>
  );
};

