import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function AdminNav() {

  return (
    <>
      <Navbar expand="lg" style={{padding: `${0.5}rem`}}>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="start"
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
                  <Link to="/admin">Főoldal</Link>
                </li>
                <li>
                  <Link to="/admin/felhasznalok">Felhasználók</Link>
                </li>
                <li>
                  <Link to="/admin/jarmuvek">Járművek</Link>
                </li>
                <li>
                  <Link to="/admin/berlesek">Bérlések</Link>
                </li>
                <li>
                  <Link to="/admin/tipusok">Típusok</Link>
                </li>
                <li>
                  <Link to="/admin/parkolohelyek">Parkolóhelyek</Link>
                </li>
                <li>
                  <Link to="/admin/arak">Napi árak</Link>
                </li>
                <li>
                  <Link to="/admin/kedvezmenyek">Kedvezmények</Link>
                </li>
                <li>
                  <Link to="/admin/statisztikak">Statisztikák</Link>
                </li>
              </ul>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}
