import { Fragment, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "../api/axios";
import AdminInputText from "./AdminInputText";
import AdminInputNumber from "./AdminInputNumber";
import AdminInputDate from "./AdminInputDate";
import AdminInputSelect from "./AdminInputSelect";
import AdminInputEmail from "./AdminInputEmail";
import AdminInputDateTime from "./AdminInputDateTime";

export default function TablaSor(props) {
  const [sorModosithato, setSorModosithato] = useState(false);
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
    setSorModosithato(false);
    SetLathatosag("");
  }, [props]);

  function modosithatova_allitas() {
    setRegiObjektum(objektum);
    setSorModosithato(true);
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
      setSorModosithato(false);
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
    await axios.put(props.apik.updateUrl + `/${modositottId}`, {
      ...objektum,
      _token: await csrf(),
    });
  }

  function megse() {
    setObjektum(regiObjektum);
    setSorModosithato(false);
  }

  function torles() {
    const torlendoId = sorIdGeneralas();
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
      // }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <tr style={{ display: lathatosag }}>
      {Object.keys(objektum).map(function (key, index) {
        return (
          <Fragment key={index}>
            {props.adatok[key] && props.adatok[key].lathato && (
              <td>
                {props.adatok[key].tipus === "text" && (
                  <AdminInputText
                    name={key}
                    regex={props.adatok[key].regex}
                    objektum={objektum[key]}
                    esemeny={ertek_modositas}
                    readOnly={
                      !(sorModosithato && props.adatok[key].modosithato)
                    }
                  />
                )}
                {props.adatok[key].tipus === "email" && (
                  <AdminInputEmail
                    name={key}
                    regex={props.adatok[key].regex}
                    objektum={objektum[key]}
                    esemeny={ertek_modositas}
                    readOnly={
                      !(sorModosithato && props.adatok[key].modosithato)
                    }
                  />
                )}
                {props.adatok[key].tipus === "number" && (
                  <AdminInputNumber
                    name={key}
                    min={props.adatok[key].min}
                    max={props.adatok[key].max}
                    objektum={objektum[key]}
                    esemeny={ertek_modositas}
                    readOnly={
                      !(sorModosithato && props.adatok[key].modosithato)
                    }
                  />
                )}
                {props.adatok[key].tipus === "date" && (
                  <AdminInputDate
                    name={key}
                    objektum={objektum[key]}
                    esemeny={ertek_modositas}
                    readOnly={
                      !(sorModosithato && props.adatok[key].modosithato)
                    }
                  />
                )}
                {props.adatok[key].tipus === "datetime" && (
                  <AdminInputDateTime
                    name={key}
                    objektum={objektum[key]}
                    esemeny={ertek_modositas}
                    readOnly={
                      !(sorModosithato && props.adatok[key].modosithato)
                    }
                  />
                )}
                {props.adatok[key].tipus === "select" && (
                  <AdminInputSelect
                    name={key}
                    objektum={objektum[key]}
                    esemeny={ertek_modositas}
                    lista={props.adatok[key].lista}
                    readOnly={
                      !(sorModosithato && props.adatok[key].modosithato)
                    }
                  />
                )}
              </td>
            )}
          </Fragment>
        );
      })}
      <td>
        {sorModosithato ? (
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
        {sorModosithato ? (
          <Button variant="outline-danger" onClick={megse}>
            Mégse
          </Button>
        ) : (
          <Button variant="outline-secondary" onClick={torles} disabled>
            <i className="bi bi-lock-fill"></i>
            Törlés
          </Button>
        )}
      </td>
    </tr>
  );
}
