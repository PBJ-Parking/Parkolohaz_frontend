import { Link } from "react-router-dom";
import "../css/nav.css";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";

export default function Navigacio(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <Navbar expand="sm" style={{ padding: `${0.5}em` }}>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbarLabel-expand"
          placement="start"
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
                  <Link to="/loggedIn">
                    <i className="bi bi-house-fill"></i> Főoldal
                  </Link>
                </li>
                <li>
                  <Link to={"/" + props.foglalas}>
                    <i className="bi bi-cart3"></i> Foglalás
                  </Link>
                </li>
                <li>
                  <Link to="/loggedIn/rolunk">
                    <i className="bi bi-book"></i> Rólunk
                  </Link>
                </li>
                <li>
                  <Link to="/loggedIn/kapcsolat">
                    <i className="bi bi-person-lines-fill"></i> Kapcsolat
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
      <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
      <Navbar.Offcanvas
        id="offcanvasNavbar-expand"
        aria-labelledby="offcanvasNavbarLabel-expand"
        placement="start"
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
                <Link to="/">
                  <i className="bi bi-house-fill"></i> Főoldal
                </Link>
              </li>
              <li>
                <Link to="/rolunk">
                  <i className="bi bi-book"></i> Rólunk
                </Link>
              </li>
              <li>
                <Link to="/kapcsolat">
                  <i className="bi bi-person-lines-fill"></i> Kapcsolat
                </Link>
              </li>
            </ul>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}
