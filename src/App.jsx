import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Article from "./components/Article";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./pages/Layout";
import LayoutAdmin from "./pages/LayoutAdmin";
import LoggedIn from "./pages/LoggedIn";
import Bejelentkezes from "./pages/Bejelentkezes";
import Profile from "./pages/Profile";
import FoglalasEllenorzes from "./components/FoglalasEllenorzes";
import FoglalasVeglegesitve from "./components/FoglalasVeglegesitve";
import { InputProvider } from "./contexts/DatumContext";
import FoglalasArticle from "./components/FoglalasArticle";
import AdminArticle from "./components/AdminArticle";
import FooldalArticle from "./components/FooldalArticle";
import Rolunk from "./components/Rolunk";
import ASZF from "./components/ASZF";
import Adatkezeles from "./components/Adatkezeles";
import Kapcsolat from "./components/Kapcsolat";
import Email from "./components/Email";
import NoPage from "./pages/NoPage";
import Regisztracio from "./pages/Regisztracio";
import useAuthContext from "./contexts/AuthContext";
import useUtvonalContext from "./contexts/UtvonalContext";
import { useEffect } from "react";
import Gyik from "./components/Gyik";
import AdminFoodal from "./components/AdminFoodal";

function App() {
  const { user } = useAuthContext();
  const { utvonalValaszto } = useUtvonalContext();
  const navigate = useNavigate();

  const { home } = utvonalValaszto(user);

  useEffect(() => {
    navigate(home)
  }, [user]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FooldalArticle />} />
          <Route path="/Rolunk" element={<Rolunk />} />
          <Route path="/belepes" element={<Bejelentkezes />} />
          <Route path="/regisztracio" element={<Regisztracio />} />
          <Route path="/ASZF" element={<ASZF />} />
          <Route path="/Adatkezeles" element={<Adatkezeles />} />
          <Route path="/Kapcsolat" element={<Kapcsolat />} />
          <Route path="/email" element={<Email />} />
          <Route path="/gyik" element={<Gyik />} />

        </Route>


        <Route path="/loggedIn" element={<LoggedIn />}>
          <Route index element={<Article />} />
          <Route path="/loggedIn/profil" element={<Profile />} />

          <Route
            path="/loggedIn/foglalas"
            element={
              <InputProvider>
                <FoglalasArticle />
              </InputProvider>
            }
          />
          <Route
            path="/loggedIn/foglalasEllenorzes"
            element={
              <InputProvider>
                <FoglalasEllenorzes />
              </InputProvider>
            }
          />

          <Route
            path="/loggedIn/foglalasVeglegesitve"
            element={
              <InputProvider>
                <FoglalasVeglegesitve />
              </InputProvider>}
          />
          <Route path="/loggedIn/ASZF" element={<ASZF />} />
          <Route path="/loggedIn/Adatkezeles" element={<Adatkezeles />} />
          <Route path="/loggedIn/Kapcsolat" element={<Kapcsolat />} />
          <Route path="/loggedIn/email" element={<Email />} />
          <Route path="/loggedIn/Rolunk" element={<Rolunk />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminFoodal />} />
          <Route path="/admin/felhasznalok" element={<AdminArticle tabla="felhasznalok"/>} />
          <Route path="/admin/jarmuvek" element={<AdminArticle tabla="jarmuvek"/>} />
          <Route path="/admin/berlesek" element={<AdminArticle tabla="berlesek"/>} />
          <Route path="/admin/tipusok" element={<AdminArticle tabla="tipusok"/>} />
          <Route path="/admin/parkolohelyek" element={<AdminArticle tabla="parkolohelyek"/>} />
          <Route path="/admin/ASZF" element={<ASZF />} />
          <Route path="/admin/Adatkezeles" element={<Adatkezeles />} />
          <Route path="/admin/Kapcsolat" element={<Kapcsolat />} />
          <Route path="/admin/email" element={<Email />} />
          <Route path="/admin/profil" element={<Profile />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
