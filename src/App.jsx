import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Article from "./components/Article";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import LoggedIn from "./pages/LoggedIn";
import Bejelentkezes from "./pages/Bejelentkezes";
import axios from "./api/axios";

function App() {
  const [nev, setNev] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        let user = await axios.get("/api/authUser");
        console.log(user);
        console.log(user.data.name)
        setNev(user.data.name); // set the state here
      } catch (error) {
        console.log(error);
      }

    }
    getUser();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Article />} />
          <Route path="/belepes" element={<Bejelentkezes />} />
        </Route>
        <Route path="/loggedIn" element={<LoggedIn />}>
          <Route index element={<Article nev={nev} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
