import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to={props.home + "/ASZF"}>
              <i className="bi fill"></i> ÁSZF
            </Link>
          </li>
          <li>
            <Link to={props.home + "/Adatkezeles"}>
              <i className="bi fill"></i> Adatkezelés
            </Link>
          </li>
          <li>
            <Link to={props.home + "/Gyik"}>
              <i className="bi fill"></i> GYIK
            </Link>
          </li>
        </ul>
      </nav>
      <h3 className="text-area text-center">PBJ Parking Kft. 2024 </h3>
    </footer>
  );
}
