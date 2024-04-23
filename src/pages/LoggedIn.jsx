import { Outlet, useNavigate } from "react-router-dom";
import Navigacio from "../components/Navigacio";
import Header from "../components/Header";

import useAuthContext from "../contexts/AuthContext";
import Footer from "../components/Footer";
import { useEffect , useState} from "react";


const LoggedIn = () => {
  const { logout } = useAuthContext();


const { utvonalValaszto, user } = useAuthContext();
const navigate = useNavigate();

const { home } = utvonalValaszto();
console.log(user);
useEffect(() => {
  navigate(home)
  console.log(user);
},  [user]);


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
        <Navigacio 
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
