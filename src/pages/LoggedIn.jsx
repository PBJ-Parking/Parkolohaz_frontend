import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";
import "../css/loggedIn.css";
import useAuthContext from "../contexts/AuthContext";
import Footer from "../components/Footer";

const LoggedIn = () => {
  const { logout } = useAuthContext();

  return (
    <>
      <main>
        <Header
          bal={"loggedIn/profil"}
          balOldali={"Profilom"}
          jobb={""}
          jobbOldali={"Kijelentkezés"}
          jobbIkon={"bi bi-box-arrow-left"}
          balIkon={"bi bi-person-lines-fill"}
          jobbEsemeny ={logout}
        />
        <Nav 
        isLoggedIn= {true}
        foglalas={"loggedIn/foglalas"}
        />
        
        <Outlet />
        <Footer />
      </main>
    </>
  );
};
export default LoggedIn;
