import { Link } from "react-router-dom";

export default function AdminNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin">Főoldal</Link>
        </li>
        <li>
          <Link to="/admin/felhasznalok" state={{ tabla: "felhasznalok" }}>
            Felhasználók
          </Link>
        </li>
        <li>
          <Link to="/admin/jarmuvek" state={{ tabla: "jarmuvek" }}>
            Járművek
          </Link>
        </li>
        <li>
          <Link to="/admin/berlesek" state={{ tabla: "berlesek" }}>
            Bérlések
          </Link>
        </li>
        <li>
          <Link to="/admin/tipusok" state={{ tabla: "tipusok" }}>
            Típusok
          </Link>
        </li>
        <li>
          <Link to="/admin/parkolohelyek" state={{ tabla: "parkolohelyek" }}>
            Parkolóhelyek
          </Link>
        </li>
      </ul>
    </nav>
  );
}
