import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../css/adminArticle.css";
import AdminForm from "./AdminForm";
import lista from "../data/data";
import AdminTabla from "./AdminTabla";

export default function AdminArticle(props) {
  const [objLista, setObjLista] = useState([]);

  const tabla = lista[props.tabla];

  const adatlekeres = async () => {
    const url = tabla.apik.indexUrl;
    try {
      const { data } = await axios.get(url);
      setObjLista(data)
    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    adatlekeres();
  }, [tabla]);

  return (
    <article className="admin-article">
      <h2>{tabla.elnevezes}</h2>
      <Container fluid className="admin-container">
        {objLista.length > 0 && (
          <>
            <AdminForm
              alapObj={tabla.alapObj}
              adatok={tabla.adatok}
              apik={tabla.apik}
              frissites={adatlekeres}
            />

            <AdminTabla adatok={tabla.adatok} objLista={objLista} apik={tabla.apik}/>
          </>
        )}
      </Container>
    </article>
  );
}
