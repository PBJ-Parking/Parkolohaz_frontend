import "./css/nav.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="">
            <i className="bi bi-house-fill"></i> Főoldal
          </a>
        </li>
        <li>
          <a href="">
            <i className="bi bi-cart3"></i> Foglalás
          </a>
        </li>
        <li>
          <a href="">
            <i className="bi bi-person-lines-fill"></i> Kapcsolat
          </a>
        </li>
      </ul>
    </nav>
  );
}
