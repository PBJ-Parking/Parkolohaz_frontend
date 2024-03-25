import "../css/foglalasArticle.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function FoglalasArticle() {
    const [foglalasVege, setFoglalasVege] = useState(new Date().toISOString().substring(0, 10));
    const [foglalasKezdete, setFoglalasKezdete] = useState(new Date().toISOString().substring(0, 10));
    const [Emelet, setEmelet] = useState();
    const navigate = useNavigate();


    const handleChange = (event) => {
        switch (event.target.id) {
            case 'Emeletek':
                setEmelet(event.target.value);
                break;
            case 'foglalasKezdet':
                setFoglalasKezdete(event.target.value);
                break;
            case 'foglalasVeg':
                setFoglalasVege(event.target.value);
                break;
            default:
                break;
        }
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    const handleButtonClick = () => {
        navigate("/loggedIn/foglalasEllenorzes");
    }


    return (
        <article>
                <>
                    <h2>Foglalás</h2> 
                    <div className="foglalasHelyek">
                    </div>
                    <div className="foglalasUrlap">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="Emeletek">Kijelölt parkoló:
                                    <select id="Emeletek" value={Emelet} onChange={handleChange}>
                                        <option value="1emelet1p">01. emelet, 01. Parkoló</option>
                                        <option value="2emelet1p">02. emelet, 01. Parkoló</option>
                                        <option value="3emelet1p">03. emelet, 01. Parkoló</option>
                                    </select>
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="foglalasKezdet">Foglalás kezdete:
                                    <input
                                        type="date"
                                        id="foglalasKezdet"
                                        value={foglalasKezdete}
                                        onChange={handleChange}
                                        min={new Date().toISOString().substring(0, 10)}
                                    />
                                </label>
                                </div>
                                <div className="form-group">
                                <label htmlFor="foglalasVeg">Foglalás vége:
                                    <input
                                        type="date"
                                        id="foglalasVeg"
                                        value={foglalasVege}
                                        onChange={handleChange}
                                        min={new Date().toISOString().substring(0, 10)}
                                    />
                                </label>
                                </div>
                        </form>

                        <p>Ár: Ft</p>
                        <h6>Kedvezmények:</h6>
                        <ul>
                            <li> napos kedvezmény! </li>
                        </ul>
                        <button className="btn btn-outline-success" onClick={handleButtonClick}><i className="bi bi-cart3"></i> Kosárba rakás</button>
                        <button className="btn btn-outline-danger"><i className="bi bi-ban"></i> Mégse</button>
                    </div>
                </>
            
        </article>

    )
}

