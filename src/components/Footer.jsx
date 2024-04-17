import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";


export default function Footer() {
    return (

        <Container fluid className="fooldal-container">
   
        <footer>
            <nav>
            <ul >
                <li >
                    <Link to="/ASZF">
                        <i className="bi fill"></i> ÁSZF
                    </Link>
                </li>
                <li>
                    <Link to="/Adatkezeles">
                        <i className="bi fill"></i> Adatkezelés
                    </Link>
                </li>
                <li>
                    <Link to="/Gyik">
                        <i className="bi fill"></i> GYIK
                    </Link>
                </li>

            </ul>
            </nav>
            <h3 className="text-area text-center" >PBJ Parking Kft. 2024 </h3>
        </footer>
        </Container>



    )

}