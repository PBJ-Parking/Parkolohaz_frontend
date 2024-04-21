import { Link } from "react-router-dom";
import "../css/nav.css";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import useAuthContext from "../contexts/AuthContext";
import { useState } from "react";

export default function Navigacio(props) {
  const [menuNyitva, setMenuNyitva] = useState(false);

  const menuToggle = () => {
    setMenuNyitva(!menuNyitva);
  };

  const menuBezar = () => {
    setMenuNyitva(false);
  };

  const { logout } = useAuthContext();
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <Navbar expand="sm" style={{ padding: `${0.5}em` }}>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand"
          onClick={menuToggle}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbarLabel-expand"
          placement="start"
          show={menuNyitva}
          onHide={menuBezar}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand">
              Menü
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              <ul>
                <li>
                  <Link to="/loggedIn" onClick={menuBezar}>
                    <i className="bi bi-house-fill"></i> Főoldal
                  </Link>
                </li>
                <li>
                  <Link to={"/" + props.foglalas} onClick={menuBezar}>
                    <i className="bi bi-cart3"></i> Foglalás
                  </Link>
                </li>
                <li>
                  <Link to="/loggedIn/rolunk" onClick={menuBezar}>
                    <i className="bi bi-book"></i> Rólunk
                  </Link>
                </li>
                <li>
                  <Link to="/loggedIn/kapcsolat" onClick={menuBezar}>
                    <i className="bi bi-person-lines-fill"></i> Kapcsolat
                  </Link>
                </li>
              </ul>
            </Nav>

            <Nav className="nav-felhasznaloi-menu">
              <h6>Felhasználói menü</h6>
              <ul>
                <li>
                  <Link to="/loggedIn/profil" onClick={menuBezar}>
                    <i className="bi bi-person-lines-fill"></i>
                    Profilom
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={logout}>
                    <i className="bi bi-box-arrow-left"></i> Kijelentkezés
                  </Link>
                </li>
              </ul>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    );
  }
  return (
    <Navbar expand="sm" style={{ padding: `${0.5}em` }}>
      <Navbar.Toggle
        aria-controls="offcanvasNavbar-expand"
        onClick={menuToggle}
      />
      <Navbar.Offcanvas
        id="offcanvasNavbar-expand"
        aria-labelledby="offcanvasNavbarLabel-expand"
        placement="start"
        show={menuNyitva}
        onHide={menuBezar}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel-expand">
            Menü
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <ul>
              <li>
                <Link
                  to="/"
                  data-bs-dismiss="offcanvasNavbar-expand"
                  onClick={menuBezar}
                >
                  <i className="bi bi-house-fill"></i> Főoldal
                </Link>
              </li>
              <li>
                <Link to="/rolunk" onClick={menuBezar}>
                  <i className="bi bi-book"></i> Rólunk
                </Link>
              </li>
              <li>
                <Link to="/kapcsolat" onClick={menuBezar}>
                  <i className="bi bi-person-lines-fill"></i> Kapcsolat
                </Link>
              </li>
            </ul>
          </Nav>

          <Nav className="nav-felhasznaloi-menu">
            <h6>Felhasználói menü</h6>
            <ul>
              <li>
                <Link to="/belepes" onClick={menuBezar}>
                  <i className="bi bi-box-arrow-in-right"></i> Bejelentkezés
                </Link>
              </li>
              <li>
                <Link to="/regisztracio" onClick={menuBezar}>
                  <i className="bi bi-person-plus-fill"></i> Regisztráció
                </Link>
              </li>
            </ul>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}
