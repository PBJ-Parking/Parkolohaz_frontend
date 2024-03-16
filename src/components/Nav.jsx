import { Link } from "react-router-dom";
import "../css/nav.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <i className="bi bi-house-fill"></i> Főoldal
          </Link>
        </li>
        <li>
          <Link to="/foglalas">
            <i className="bi bi-cart3"></i> Foglalás
          </Link>
        </li>
        <li>
          <Link to="/kapcsolat">
            <i className="bi bi-person-lines-fill"></i> Kapcsolat
          </Link>
        </li>
      </ul>
    </nav>
  );
}
