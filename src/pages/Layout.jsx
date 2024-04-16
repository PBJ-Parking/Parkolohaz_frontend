import { Outlet } from "react-router-dom";
import Navigacio from "../components/Navigacio";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
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
    </>
  );
};
export default Layout;
