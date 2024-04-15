import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "../api/axios";

export default function TablaSor(props) {
  const [modosithato, setModosithato] = useState(false);
  const [objektum, setObjektum] = useState(props.obj);
  const [regiObjektum, setRegiObjektum] = useState(props.obj);
  const [lathatosag, SetLathatosag] = useState("");

  const sorIdGeneralas = () => {
    const kulcsok_lista = props.adatok.elsodleges_kulcs;


    if (kulcsok_lista.length > 1) {
      let kompozit_kulcs = "";
      let i = 0;
      while (i < kulcsok_lista.length) {
        kompozit_kulcs += objektum[kulcsok_lista[i]] + "/";
        i++;
      }
      return kompozit_kulcs.replace(" ", "%20");
    }

    return objektum[kulcsok_lista[0]];
  };

  useEffect(() => {
    setObjektum(props.obj);
    setRegiObjektum(props.obj);
  }, [props]);

  function modosithatova_allitas() {
    setRegiObjektum(objektum);
    setModosithato(true);
  }

  const csrf = async () => {
    let visszater;
    try {
      const { data: token } = await axios.get("/token");
      visszater = token;
    } catch (error) {
      console.log(error);
      visszater = false;
    }

    return visszater;
  };

  function ertek_modositas(event) {
    setObjektum({ ...objektum, [event.target.name]: event.target.value });
  }

  function mentes() {
    let modositottId = sorIdGeneralas();
    try {
      axiosModositas(modositottId);
      setModosithato(false);
      console.log(modositottId + ". azonosítójú sor módosítva!", regiObjektum, objektum);
    } catch (error) {
      console.error(error);
    }
  }

  async function axiosModositas(modositottId) {
    await axios.put(props.apik.updateUrl + `/${modositottId}`, {
      ...objektum,
      _token: await csrf(),
    });
  }

  function megse() {
    setObjektum(regiObjektum);
    setModosithato(false);
  }

  function torles() {
    const torlendoId = sorIdGeneralas()
    try {
      const axiosTorles = async () => {
        await axios.delete(props.apik.destroyUrl + `/${torlendoId}`, {
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
          <Button variant="outline-success" onClick={mentes}>
            Mentés
          </Button>
        ) : (
          <Button variant="outline-success" onClick={modosithatova_allitas}>
            Módosítás
          </Button>
        )}
      </td>

      <td>
        {modosithato ? (
          <Button variant="outline-danger" onClick={megse}>
            Mégse
          </Button>
        ) : (
          <Button variant="outline-danger" onClick={torles}>
            Törlés
          </Button>
        )}
      </td>
    </tr>
  );
}
