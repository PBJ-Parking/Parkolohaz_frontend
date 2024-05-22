import "../css/foglalasArticle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../api/axios";
import { useParkolohelyContext } from "../contexts/ParkolohelyContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../contexts/DatumContext";
import { Fragment } from "react";

export default function FoglalasArticle() {
    const [foglalasVege, setFoglalasVege] = useState(
        new Date().toISOString().substring(0, 10)
    );
    const [foglalasKezdete, setFoglalasKezdete] = useState(
        new Date().toISOString().substring(0, 10)
    );
    const [Emelet, setEmelet] = useState();
    const navigate = useNavigate();
    const { setDatumVege, setDatumKezdete } = useInput();
    const {
        getElsoEmelet,
        getMasodikEmelet,
        getHarmadikEmelet,
        elsoEmelet,
        masodikEmelet,
        harmadikEmelet,
        setEmeletSzam,
        setArEllenorzes,
        setArTipus,
        setKedvezmenyID,
        setHelyID
    } = useParkolohelyContext();
    const [aktualisEmelet, setAktualisEmelet] = useState(elsoEmelet);
    let foglalasVegeDate = new Date(foglalasVege);
    let foglalasKezdeteDate = new Date(foglalasKezdete);
    let napokKulonbseg =
        Math.abs(foglalasKezdeteDate - foglalasVegeDate) / (1000 * 60 * 60 * 24);
    const [kedvezmeny, setKedvezmeny] = useState({});
    const [aktualisAr, setAktualisAr] = useState();
    const [helyTipusData, setHelyTipusData] = useState();
    const [helyStatusData, setHelyStatusData] = useState('f');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    useEffect(() => {
        getElsoEmelet();
        setAktualisEmelet(elsoEmelet);
        getKedvezmeny(napokKulonbseg);
        console.log(foglalasKezdeteDate);
    }, []);

    useEffect(() => {
        switch (Emelet) {
            case "1emelet1p":
                setAktualisEmelet(elsoEmelet);
                setEmeletSzam(1);
                console.log("frissült");
                break;
            case "2emelet1p":
                setAktualisEmelet(masodikEmelet);
                setEmeletSzam(2);
                break;
            case "3emelet1p":
                setAktualisEmelet(harmadikEmelet);
                setEmeletSzam(3);
                break;
            default:
                setAktualisEmelet(elsoEmelet);
                setEmeletSzam(1);
                console.log(" def frissült");
                break;
        }
    }, [Emelet, elsoEmelet, masodikEmelet, harmadikEmelet, foglalasKezdete]);

    useEffect(() => {
        gombEngedelyezes();
        setArEllenorzes(aktualisAr);
    }, [aktualisAr]);

    useEffect(() => {
        setKedvezmenyID(kedvezmeny.kedvezmeny_id);
    }, [kedvezmeny]);

    const handleChange = (event) => {
        
        switch (event.target.id) {
            case "Emeletek":
                setEmelet(event.target.value);
                getElsoEmelet();
                getMasodikEmelet();
                getHarmadikEmelet();
                break;
            case "foglalasKezdet":
                setFoglalasKezdete(event.target.value);
                setDatumKezdete(event.target.value);
                foglalasKezdeteDate = new Date(event.target.value);
                napSzam =
                    Math.abs(foglalasKezdeteDate - foglalasVegeDate) /
                    (1000 * 60 * 60 * 24);
                getKedvezmeny(napSzam);
                arSzamitas(helyTipusData, helyStatusData, napSzam);
                break;
            case "foglalasVeg":
                setFoglalasVege(event.target.value);
                setDatumVege(event.target.value);
                foglalasVegeDate = new Date(event.target.value);
                var napSzam =
                    Math.abs(foglalasKezdeteDate - foglalasVegeDate) /
                    (1000 * 60 * 60 * 24);
                getKedvezmeny(napSzam); 
                arSzamitas(helyTipusData, helyStatusData, napSzam);
                break;
            default:
                break;
        }
    };

    const getKedvezmeny = async (napSzam) => {
        try {
            const { data } = await axios.get(
                "api/kedvezmenyNapokSzamanakSzerint/" + napSzam
            );
            setKedvezmeny(data);
        } catch (error) {
            console.log(error);
        }
    };

    const statuszFigyelo = (foglalas_kezdet) => {
        aktualisEmelet.map((hely)=>{
          if(hely.statusz != "m"){

        }  
        })
        
    }

    const getValasztottTipusAr = async (tipus) => {
        try {
            const { data } = await axios.get(
                "api/valasztottTipusAr/" + tipus
            );
            return data
        } catch (error) {
            console.log(error);
        }
    };

    const getValasztottArTipus = async (type) => {
        try {
            const { data } = await axios.get(
                "api/valasztottArTipus/" + type
            );
            console.log('##################', data);
            setArTipus(data);
            return data
        } catch (error) {
            console.log(error);
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleButtonClick = () => {
        navigate("/loggedIn/foglalasEllenorzes");
    };

    const arSzamitas = async (helyTipus, helyStatus, napokData) => {
        if (helyStatus == 's') {
            const ar = await getValasztottTipusAr(helyTipus);
            let szamitottAr = Math.round(ar * napokData / 100 * (100 - kedvezmeny.merteke));
            setAktualisAr(szamitottAr);
        }
    }
    
    const gombEngedelyezes = () => {
        if(aktualisAr > 0){
            setIsButtonDisabled(false);
        }else{
            setIsButtonDisabled(true)
        }
    }
    const helyHandle = async (event) => {
        switch (event.statusz) {
            case "s":
                console.log('helyHandle helyID:', event.hely_id);
                setHelyTipusData(event.hely_tipusa);
                setHelyStatusData(event.statusz)
                arSzamitas(event.hely_tipusa, event.statusz, napokKulonbseg);
                getValasztottArTipus(event.hely_tipusa);
                setHelyID(event.hely_id);
                break;
            case "b":
                alert("Ez a parkolóhely jelenleg ki van bérelve! Kérem válasszon egy zöld háttérrel rendelkező mezőt!");
                break;
            case "f":
                alert("Ez a parkolóhely jelenleg foglalt! Kérem válasszon egy zöld háttérrel rendelkező mezőt!");
                break;
            case "n":
                alert("Ez a parkolóhely jelenleg felújítás alatt áll! Kérem válasszon egy zöld háttérrel rendelkező mezőt!");
                break;
            case "m":
                alert("Ez a parkolóhely megszűnt! Kérem válasszon egy zöld háttérrel rendelkező mezőt!");
                break;

            default:
                break;
        }
    };

    return (
        <article className="foglalasArticle">
            <>
                <h2>Foglalás</h2>
                <div className="foglalasHelyek">
                    {Object.keys(aktualisEmelet).map((type, index) => (
                        <Fragment key={index}>
                            <div className="foglalasBorder">
                                <div className="foglalasFejlec">
                                    <p>{type} helyek</p>
                                </div>
                                <div className={type}>
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
                                            case "m":
                                                backgroundColor = "black";
                                                break;
                                            default:
                                                backgroundColor = "transparent";
                                        }

                                        return (
                                            <div
                                                className={type + "Hely"}
                                                key={place.hely_id}
                                                style={{ backgroundColor }}
                                                onClick={() => helyHandle(place)}
                                            >
                                                {place.statusz}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Fragment>
                    ))}
                    <ul>
                        <li>
                            <p className="zold">Zöld jelzés: A parkolóhely szabad.</p>
                        </li>
                        <li>
                            <p className="piros">Piros jelzés: A parkolóhely bérelve van.</p>
                        </li>
                        <li>
                            <p className="sarga">Sárga jelzés: A parkolóhely foglalt.</p>
                        </li>
                        <li>
                            <p className="szurke">
                                Szürke jelzés: A parkolóhely karbantartás alatt van.
                            </p>
                        </li>
                        <li>
                            <p className="fekete">
                                Fekete jelzés: A parkolóhely megszűnt.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="foglalasUrlap">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="Emeletek">
                                Kijelölt parkoló:
                                <select id="Emeletek" value={Emelet} onChange={handleChange}>
                                    <option value="1emelet1p">01. emeleti parkoló</option>
                                    <option value="2emelet1p">02. emeleti parkoló</option>
                                    <option value="3emelet1p">03. emeleti parkoló</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="foglalasKezdet">
                                Foglalás kezdete:
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
                            <label htmlFor="foglalasVeg">
                                Foglalás vége:
                                <input
                                    type="date"
                                    id="foglalasVeg"
                                    value={foglalasVege}
                                    onChange={handleChange}
                                    min={new Date().toISOString().substring(0, 10)}
                                />
                            </label>
                            <p>Összesen {napokKulonbseg} napra foglalna bérlést!</p>
                        </div>
                    </form>

                    <p>Ár: {aktualisAr} Ft</p>
                    <h6>Kedvezmények: {kedvezmeny.merteke}%</h6>
                    <ul>
                        <li>{napokKulonbseg} napos kedvezmény! </li>
                    </ul>
                    <button
                        className="btn btn-outline-success"
                        onClick={handleButtonClick}
                        disabled={isButtonDisabled}
                        
                    >
                        <i className="bi bi-cart3"></i> Kosárba rakás
                    </button>
                    <button className="btn btn-outline-danger">
                        <i className="bi bi-ban"></i> Mégse
                    </button>
                </div>
            </>
        </article>
    )
}

