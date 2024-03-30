import "../css/foglalasArticle.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useParkolohelyContext } from "../contexts/ParkolohelyContext";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useInput } from "../contexts/DatumContext";


export default function FoglalasArticle() {
    const [foglalasVege, setFoglalasVege] = useState(new Date().toISOString().substring(0, 10));
    const [foglalasKezdete, setFoglalasKezdete] = useState(new Date().toISOString().substring(0, 10));
    const [Emelet, setEmelet] = useState();
    const navigate = useNavigate();
    const { setDatumVege, setDatumKezdete } = useInput();
    const { getElsoEmelet, getMasodikEmelet, getHarmadikEmelet, elsoEmelet, masodikEmelet, harmadikEmelet } = useParkolohelyContext();
    const [aktualisEmelet, setAktualisEmelet] = useState(elsoEmelet);

    useEffect(() => {
        getElsoEmelet();
        setAktualisEmelet(elsoEmelet);
    }, [])

    useEffect(() => {
        switch (Emelet) {
            case '1emelet1p':
                setAktualisEmelet(elsoEmelet);
                break;
            case '2emelet1p':
                setAktualisEmelet(masodikEmelet);
                break;
            case '3emelet1p':
                setAktualisEmelet(harmadikEmelet);
                break;
            default:
                break;
        }
    }, [Emelet, elsoEmelet, masodikEmelet, harmadikEmelet]);

    const handleChange = (event) => {
        switch (event.target.id) {
            case 'Emeletek':
                setEmelet(event.target.value);
                getElsoEmelet();
                getMasodikEmelet();
                getHarmadikEmelet();
                break;
            case 'foglalasKezdet':
                setFoglalasKezdete(event.target.value);
                setDatumKezdete(event.target.value);
                break;
            case 'foglalasVeg':
                setFoglalasVege(event.target.value);
                setDatumVege(event.target.value);
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

    const helyHandle = (event) => {
        console.log(event)
    }
     /* const emeletChange = () =>{
        useEffect(() => {
            switch (Emelet) {
                case '1emelet1p':
                    setAktualisEmelet(elsoEmelet);
                    break;
                case '2emelet1p':
                    setAktualisEmelet(masodikEmelet);
                    break;
                case '3emelet1p':
                    setAktualisEmelet(harmadikEmelet);
                    break;
                default:
                    break;
            }
        }, [Emelet, elsoEmelet, masodikEmelet, harmadikEmelet]);
     } */


    return (

        <article>
            <>
                <h2>Foglalás</h2>
                <div className="foglalasHelyek">
                    {Object.keys(aktualisEmelet).map((type) => (
                        <div key={type}>
                            <p>{type} helyek</p>
                            {aktualisEmelet[type].map((place) => {
                                let backgroundColor;
                                switch (place.statusz) {
                                    case "b":
                                        backgroundColor = "red";
                                        break;
                                    case "s":
                                        backgroundColor = "green";
                                        break;
                                    case "n":
                                        backgroundColor = "silver";
                                        break;
                                    case "f":
                                        backgroundColor = "yellow";
                                        break;
                                    default:
                                        backgroundColor = "transparent";
                                }

                                return (
                                    <div className={place.hely_id} key={place.hely_id} style={{ backgroundColor }} onClick={() => helyHandle(place.hely_id)}>
                                        {place.statusz}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <div className="foglalasUrlap">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="Emeletek">Kijelölt parkoló:
                                <select id="Emeletek" value={Emelet} onChange={handleChange}>
                                    <option value="1emelet1p">01. emeleti parkoló</option>
                                    <option value="2emelet1p">02. emeleti parkoló</option>
                                    <option value="3emelet1p">03. emeleti parkoló</option>
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

