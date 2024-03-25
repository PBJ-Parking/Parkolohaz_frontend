import "../css/foglalasVeglegesitve.css"
import { useState } from 'react';
import Foglalas from "../pages/Foglalas";
import useAuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function FoglalasVeglegesitve() {


    return (
        <>
            
            <div className="container">
                <h2>Foglalás</h2>
                <div className="foglalasHelyekVeglegesitve"></div>
                <div className="letoltes">

                    <h5>Köszönjük a foglalást!</h5>
                    <p>Itt töltheti le a pdf dokumentumot, amellyet a kapunál beolvasva beengedik a parkolóházba!</p>
                    <button><i className="bi bi-download"></i>   Letöltés</button>
                </div>
            </div>
        </>
    )
}