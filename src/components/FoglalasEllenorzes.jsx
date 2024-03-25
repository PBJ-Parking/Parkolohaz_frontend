import "../css/foglalasEllenorzes.css"
import { useState } from 'react';
import Foglalas from "../pages/Foglalas";
import useAuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";



export default function FoglalasEllenorzes() {
    const { user } = useAuthContext();
    const { jarmu } = useAuthContext();
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleClick = () => {
        navigate("/loggedIn/foglalas");
      };

    const handleButtonClick = () => {
        navigate("/loggedIn/foglalasVeglegesitve");
      };
    
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
                                    />
                                </label>
                                <label>Telefonszám:
                                    <input
                                        type="text"
                                        value={user.telefonszam}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                                <label>Email:
                                    <input
                                        type="text"
                                        value={user.email}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                                <label>Rendszám:
                                    <input
                                        type="text"
                                        value={jarmu.rendszam}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                                <label>Foglalási időszak:
                                    <input
                                        type="text"
                                        value={""}
                                        onChange={(e) => setName(e.target.value)}
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