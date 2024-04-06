import "../css/foglalasVeglegesitve.css"
import useAuthContext from "../contexts/AuthContext";
import { useInput } from "../contexts/DatumContext";
import { useParkolohelyContext } from "../contexts/ParkolohelyContext";
import { useEffect } from "react";
import axios from "../api/axios";

export default function FoglalasVeglegesitve() {
    const csrf = async () => {
        try {
          const { data: token } = await axios.get("/token");
          return token;
        } catch (error) {
          console.log(error);
          return false;
        }
      };
    const { user, jarmu } = useAuthContext();
    const { arTipus, KedvezmenyID, helyID } = useParkolohelyContext();
    const { datumVege, datumKezdete } = useInput();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: token } = await axios.get("/token");
                const adat = {
                    jarmu_id: jarmu.jarmu_id,
                    foglalas_kezdet: datumKezdete,
                    foglalas_vege: datumVege,
                    ar_id: arTipus.ar_id,
                    kedvezmeny_id: KedvezmenyID,
                    hely_id: helyID,
                    fizetve: 1,
                    _token: token,
                };

                console.log("Fetched data:", adat);
                await axios.post("api/postBerles/", adat);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [jarmu, arTipus, KedvezmenyID, helyID, datumKezdete, datumVege]);
    return (
        <>

            <div className="container">
                <h2>Foglalás</h2>
                <div className="foglalasHelyekVeglegesitve">
                    <p>Bérlő neve: {user.name}</p>
                    <p>Bérlő Telefonszáma: {user.telefonszam}</p>
                    <p>Bérlő e-mail címe: {user.email}</p>
                    <p>Bérlő rendszáma: {jarmu.rendszam}</p>
                    <p>Bérelt időszak: {datumKezdete} - {datumVege}</p>
                </div>
                <div className="letoltes">

                    <h5>Köszönjük a foglalást!</h5>
                    <p>Itt töltheti le a pdf dokumentumot, amellyet a kapunál beolvasva beengedik a parkolóházba!</p>
                    <button><i className="bi bi-download"></i>   Letöltés</button>
                </div>
            </div>
        </>
    )
}