import { Outlet } from "react-router-dom";
import Navigacio from "../components/Navigacio";
import Header from "../components/Header";
import Footer from "../components/Footer";
const NoPage = () => {
  return (
    <>
      <main>
        <Header bal={"belepes"} balOldali={"Belépés"} jobb={"regisztacio"} jobbOldali={"Regisztráció"} balIkon={"bi bi-box-arrow-in-right"} jobbIkon={"bi bi-person-plus-fill"} />
        <Navigacio />
       <div><h1>A keresett oldal nem található!</h1></div>
        <Footer />
      </main>



    </>
  );
};
export default NoPage;
