import { Link } from "react-router-dom";
import "./css/header.css";

export default function Header() {
  return (
    <header>
      <h1 onClick={<Link to="/"></Link>}>PBJ-Parking</h1>
      <ul>
        <li>
          <Link to="/belepes">
            <i className="bi bi-box-arrow-in-right"></i> Belépés
          </Link>
        </li>
        <li>
          <Link to="/regisztracio">
            <i className="bi bi-person-plus-fill"></i> Regisztáció
          </Link>
        </li>
      </ul>
    </header>
  );
}
