import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import Article from "./components/Article";

function App() {


  return (
    <><main>
      <header>
        <h1>PBJ-Parking</h1>
        <ul>
          <li><a href=""><i className="bi bi-box-arrow-in-right"></i> Belépés</a></li>
          <li><a href=""> <i className="bi bi-person-plus-fill"></i> Regisztáció</a></li>
        </ul>
      </header>
      <Nav />
      <Article />
    </main>
    </>
  )
}

export default App
