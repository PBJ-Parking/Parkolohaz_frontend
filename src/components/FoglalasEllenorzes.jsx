import "../css/foglalasEllenorzes.css"
import { useState } from 'react';
import Foglalas from "../pages/Foglalas";
import useAuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {useInput} from "../contexts/DatumContext";
import { useParkolohelyContext } from "../contexts/ParkolohelyContext";



export default function FoglalasEllenorzes() {
    const { user } = useAuthContext();
    const { jarmu } = useAuthContext();
    const {datumVege, datumKezdete} = useInput();
    const navigate = useNavigate();
    const {parkolohely} = useParkolohelyContext();
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleClick = () => {
        navigate("/loggedIn/foglalas");
      };

    const handleButtonClick = () => {
        navigate("/loggedIn/foglalasVeglegesitve");
      };

      console.log(parkolohely);
    
    return (
        <div className="FoglalasEllenorzesArticle">
                <>
                    <h2>Foglalás</h2>
                    <div className="foglalasHelyekEllenorzes"></div>
                    <div className="foglalasUrlapEllenorzes">
                        <h5>Kérjük ellenőrizze az adatokat a foglalás véglegesítése előtt!</h5>
                        <div className="formok">
                            <form onSubmit={handleSubmit}>
                                <label> Név:
                                    <input
                                        type="text"
                                        value={user.name}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled
                                    />
                                </label>
                                <label>Telefonszám:
                                    <input
                                        type="text"
                                        value={user.telefonszam}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled
                                    />
                                </label>
                                <label>Email:
                                    <input
                                        type="text"
                                        value={user.email}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled
                                    />
                                </label>
                                <label>Rendszám:
                                    <input
                                        type="text"
                                        value={jarmu.rendszam}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled
                                    />
                                </label>
                                <label>Foglalási időszak:
                                    <input
                                        type="text"
                                        value={datumKezdete+" - "+ datumVege}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled
                                    />
                                </label>
                            </form>
                        </div>
                        <p>Ár: Ft</p>
                        <h3>Kedvezmények:</h3>
                        <ul>
                            <li> napos kedvezmény! </li>
                        </ul>

                        <button className="btn btn-outline-success" onClick={handleButtonClick}><i className="bi bi-check2"></i> Foglalás véglegesítése</button>
                        <button className="btn btn-outline-danger" onClick={handleClick}><i className="bi bi-ban"></i> Mégse</button>
                    </div>
                </>
            </div>)}