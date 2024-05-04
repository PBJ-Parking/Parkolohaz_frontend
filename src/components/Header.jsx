import { Link } from "react-router-dom";
import "../css/header.css";

export default function Header(props) {
  return (
    <header>
      <h1>
        <Link className="h1" to={"/" + props.home}>
          PBJ-Parking
        </Link>
      </h1>
      <ul>
        <li>
          <Link to={"/" + props.bal}>
            <i className={props.balIkon}></i> {props.balOldali}
          </Link>
        </li>
        <li>
          <Link to={"/" + props.jobb} onClick={props.jobbEsemeny}>
            <i className={props.jobbIkon}></i> {props.jobbOldali}
          </Link>
        </li>
      </ul>
    </header>
  );
}
