import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import TablaSor from "./TablaSor";
import "../css/adminArticle.css";
import TablaFejlecSor from "./TablaFejlecSor";
import AdminForm from "./AdminForm";
import lista from "../data/data";

export default function AdminArticle(props) {
  const [objLista, setObjLista] = useState([]);

  const tabla = lista[props.tabla]

  const adatlekeres = async () => {
    const url = tabla.apik.indexUrl;
    try {
      const { data } = await axios.get(url);
      setObjLista(data);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    adatlekeres();
  }, [props]);

  return (
    <Container fluid className="admin-container">
      {objLista.length && (
        <>
          <AdminForm
            alapObj={tabla.alapObj}
            adatok={tabla.adatok}
            apik={tabla.apik}
          />

          <Table responsive striped className="admin-table">
            <thead>
              <TablaFejlecSor adatok={tabla.adatok} />
            </thead>

            <tbody>
              {objLista.map((value, index) => {
                console.log(index)
                return (
                  <TablaSor
                    key={index}
                    obj={value}
                    fejlec={true}
                    sorszam={index}
                    adatok={tabla.adatok}
                    apik={tabla.apik}
                  />
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
}
