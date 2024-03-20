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
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Article />} />
          <Route path="/belepes" element={<Bejelentkezes />} />
        </Route>
        <Route path="/loggedIn" element={<LoggedIn />}>
          <Route index element={<Article />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
