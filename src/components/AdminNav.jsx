import { Link } from "react-router-dom";

export default function AdminNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin">Főoldal</Link>
        </li>
        <li>
          <Link to="/admin/felhasznalok">
            Felhasználók
          </Link>
        </li>
        <li>
          <Link to="/admin/jarmuvek">
            Járművek
          </Link>
        </li>
        <li>
          <Link to="/admin/berlesek">
            Bérlések
          </Link>
        </li>
        <li>
          <Link to="/admin/tipusok">
            Típusok
          </Link>
        </li>
        <li>
          <Link to="/admin/parkolohelyek">
            Parkolóhelyek
          </Link>
        </li>
        <li>
          <Link to="/admin/arak">
            Napi árak
          </Link>
        </li>
        <li>
          <Link to="/admin/kedvezmenyek">
            Kedvezmények
          </Link>
        </li>
        <li>
          <Link to="/admin/statisztikak">
            Statisztikák
          </Link>
        </li>
      </ul>
    </nav>
  );
}
