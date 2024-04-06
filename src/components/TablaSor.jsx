import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "../api/axios";

export default function TablaSor(props) {
  const [modosithato, setModosithato] = useState(false);
  const [objektum, setObjektum] = useState(props.obj);
  const [regiObjektum, setRegiObjektum] = useState(props.obj);
  const [lathatosag, SetLathatosag] = useState("");

  function modosithatova_allitas() {
    setRegiObjektum(objektum);
    setModosithato(true);
  }

  const csrf = async () => {
    try {
      const { data: token } = await axios.get("/token");
      return token;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  function ertek_modositas(event) {
    setObjektum({ ...objektum, [event.target.name]: event.target.value });
    console.log(objektum);
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
    await axios.put(props.apik.updateUrl +`/${modositottId}`, {
      ...objektum,
      _token: await csrf(),
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
        await axios.delete(props.apik.destroyUrl +`/${torlendoId}`, {
          headers: {
            "X-CSRF-TOKEN": await csrf(),
          },
        });
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
      {Object.keys(objektum).map(function (key) {
        return (
          <td key={objektum["id"] + key}>
            {modosithato &&
            key !== "id" &&
            key !== "created_at" &&
            key !== "updated_at" ? (
              <input
                type="text"
                name={key}
                id={"input_" + key}
                value={objektum[key]}
                onChange={ertek_modositas}
              />
            ) : (
              <input
                type="text"
                name={key}
                id={"input_" + key}
                value={objektum[key]}
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
            sorindex={objektum["id"]}
          >
            Mentés
          </Button>
        ) : (
          <Button
            variant="outline-success"
            onClick={modosithatova_allitas}
            sorindex={objektum["id"]}
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
            sorindex={objektum["id"]}
          >
            Mégse
          </Button>
        ) : (
          <Button
            variant="outline-danger"
            onClick={torles}
            sorindex={objektum["id"]}
          >
            Törlés
          </Button>
        )}
      </td>
    </tr>
  );
}
