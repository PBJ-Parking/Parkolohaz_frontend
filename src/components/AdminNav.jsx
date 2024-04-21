import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import useAuthContext from "../contexts/AuthContext";
import { useState } from "react";

export default function AdminNav() {

  const [menuNyitva, setMenuNyitva] = useState(false)

  const menuToggle = () => {
    setMenuNyitva(!menuNyitva)
  }

  const menuBezar = () => {
    setMenuNyitva(false)
  }

  const { logout } = useAuthContext();
  return (
    <>
      <Navbar className="admin-nav" expand="lg" style={{ padding: `${0.5}rem` }}>
        <Navbar.Toggle 
        aria-controls={`offcanvasNavbar-expand`} 
        onClick={menuToggle}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="start"
          show={menuNyitva}
          onHide={menuBezar}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
              Menü
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              <ul>
                <li>
                  <Link to="/admin" onClick={menuBezar}>
                    <i className="bi bi-house-fill"></i> Főoldal
                  </Link>
                </li>
                <li>
                  <Link to="/admin/statisztikak" onClick={menuBezar}>
                    <i className="bi bi-bar-chart-line-fill"></i> Statisztikák
                  </Link>
                </li>
                <li>
                  <Link to="/admin/felhasznalok" onClick={menuBezar}>
                    <i className="bi bi-people-fill"></i> Felhasználók
                  </Link>
                </li>
                <li>
                  <Link to="/admin/jarmuvek" onClick={menuBezar}>
                    <i className="bi bi-car-front-fill"></i> Járművek
                  </Link>
                </li>
                <li>
                  <Link to="/admin/berlesek" onClick={menuBezar}>
                    <i className="bi bi-calendar-week-fill"></i> Bérlések
                  </Link>
                </li>
                <li>
                  <Link to="/admin/tipusok" onClick={menuBezar}>
                    <i className="bi bi-list-ul"></i> Típusok
                  </Link>
                </li>
                <li>
                  <Link to="/admin/parkolohelyek" onClick={menuBezar}>
                    <i className="bi bi-p-square-fill"></i> Parkolóhelyek
                  </Link>
                </li>
                <li>
                  <Link to="/admin/arak" onClick={menuBezar}>
                    <i className="bi bi-currency-euro"></i> Napi árak
                  </Link>
                </li>
                <li>
                  <Link to="/admin/kedvezmenyek" onClick={menuBezar}>
                    <i className="bi bi-percent"></i> Kedvezmények
                  </Link>
                </li>
              </ul>
            </Nav>

            <Nav className="nav-felhasznaloi-menu">
              <h6>Felhasználói menü</h6>
              <ul>
                <li>
                  <Link to="/admin/profil" onClick={menuBezar}>
                    <i className="bi bi-person-lines-fill"></i> Profilom
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
    </>
  );
}
