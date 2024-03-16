import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <main>
        <Header bal={"belepes"} balOldali={"Belépés"} jobb={"regisztacio"} jobbOldali={"Regisztráció"} balIkon={"bi bi-box-arrow-in-right"} jobbIkon={"bi bi-person-plus-fill"} />
        <Nav />
        <Outlet />
      </main>



    </>
  );
};
export default Layout;
