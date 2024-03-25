import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Article from "./components/Article";
import {Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import LoggedIn from "./pages/LoggedIn";
import Bejelentkezes from "./pages/Bejelentkezes";
import Profile from "./pages/Profile";
import Foglalas from "./pages/Foglalas";
import FoglalasEllenorzes from "./components/FoglalasEllenorzes";
import FoglalasVeglegesitve from "./components/FoglalasVeglegesitve";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Article />} />
          <Route path="/belepes" element={<Bejelentkezes />} />
        </Route>
        <Route path="/loggedIn" element={<LoggedIn />}>
          <Route index element={<Article />} />
          <Route path="/loggedIn/profil" element={<Profile />} />
          <Route path="/loggedIn/foglalas" element={<Foglalas />} />
          <Route path="/loggedIn/foglalasEllenorzes" element={<FoglalasEllenorzes />} />
          <Route path="/loggedIn/foglalasVeglegesitve" element={<FoglalasVeglegesitve />} />
        </Route>
        

      </Routes>
    </>
  );
}

export default App;
