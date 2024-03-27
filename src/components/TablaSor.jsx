import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "../api/axios";

export default function TablaSor(props) {
  const [modosithato, setModosithato] = useState(false);
  const [objektum, setObjektum] = useState(props.obj);
  const [regiObjektum, setRegiObjektum] = useState(props.obj);
  const [lathatosag, SetLathatosag] = useState();

  function modosithatova_allitas() {
    setRegiObjektum(objektum);
    setModosithato(true);
  }

  function ertek_modositas(event) {
    setObjektum({ ...objektum, [event.target.name]: event.target.value });
  }

  function mentes(event) {
    const modositottId = event.target.attributes["sorindex"].value;
    try {
      axiosModositas(modositottId);
      setModosithato(false);
      console.log(
        modositottId + ". azonosítójú sor módosítva!",
        regiObjektum,
        objektum
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function axiosModositas(modositottId) {
    await axios.put(`api/felhasznalok/${modositottId}`, {
      name: objektum.name,
      telefonszam: objektum.telefonszam,
      cim: objektum.cim,
      email: objektum.email,
      password: objektum.password,
      megrendelo_tipus: objektum.megrendelo_tipus,
      adoszam: objektum.adoszam,
      admin_e: objektum.admin_e,
    });
  }

  function megse() {
    setObjektum(regiObjektum);
    setModosithato(false);
  }

  function torles(event) {
    const torlendoId = event.target.attributes["sorindex"].value;
    try {
      const axiosTorles = async () => {
        await axios.delete(`api/felhasznalok/${torlendoId}`);
        SetLathatosag("none");
        console.log(torlendoId + " azonosítójú sor törölve!");
      };
      axiosTorles();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <tr style={{ display: lathatosag }}>
      {Object.keys(props.obj).map(function (key) {
        return (
          <td key={props.obj["id"] + key}>
            {modosithato &&
            key !== "id" &&
            key !== "created_at" &&
            key !== "updated_at" ? (
              <input
                type="text"
                name={key}
                id={"input_" + key}
                value={objektum[key] || ""}
                onChange={ertek_modositas}
              />
            ) : (
              <input
                type="text"
                name={key}
                id={"input_" + key}
                value={objektum[key] || ""}
                readOnly
              />
            )}
          </td>
        );
      })}
      <td>
        {modosithato ? (
          <Button
            variant="outline-success"
            onClick={mentes}
            sorindex={props.obj["id"]}
          >
            Mentés
          </Button>
        ) : (
          <Button
            variant="outline-success"
            onClick={modosithatova_allitas}
            sorindex={props.obj["id"]}
          >
            Módosítás
          </Button>
        )}
      </td>

      <td>
        {modosithato ? (
          <Button
            variant="outline-danger"
            onClick={megse}
            sorindex={props.obj["id"]}
          >
            Mégse
          </Button>
        ) : (
          <Button
            variant="outline-danger"
            onClick={torles}
            sorindex={props.obj["id"]}
          >
            Törlés
          </Button>
        )}
      </td>
    </tr>
  );
}
