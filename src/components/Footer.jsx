import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import useUtvonalContext from "../contexts/UtvonalContext";
import useAuthContext from "../contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Footer() {
    const {user} = useAuthContext();

    const {utvonalValaszto} = useUtvonalContext();

   const userTipus=utvonalValaszto(user);
   console.log(userTipus);
  


    return (

       
   
        <footer>
            <nav>
            <ul >
                <li >
                    <Link to={userTipus.home+"/ASZF"}>
                        <i className="bi fill"></i> ÁSZF
                    </Link>
                </li>
                <li>
                    <Link to={userTipus.home+"/Adatkezeles"}>
                        <i className="bi fill"></i> Adatkezelés
                    </Link>
                </li>
                <li>
                    <Link to={userTipus.home+"/Gyik"}>
                        <i className="bi fill"></i> GYIK
                    </Link>
                </li>

            </ul>
            </nav>
            <h3 className="text-area text-center" >PBJ Parking Kft. 2024 </h3>
        </footer>
        



    )

}