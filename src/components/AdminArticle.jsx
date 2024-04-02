import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import TablaSor from "./TablaSor";
import "../css/adminArticle.css";
import TablaFejlecSor from "./TablaFejlecSor";
import AdminForm from "./AdminForm";
import lista from "../data/data";

export default function AdminArticle() {
  const [objLista, setObjLista] = useState([]);

  const adatlekeres = async () => {
    const url = lista.felhasznalok.apik.indexUrl;
    try {
      const { data } = await axios.get(url);
      setObjLista(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    adatlekeres();
    console.log(objLista[0])
  }, []);
  return (
    <Container fluid className="admin-container">
      {objLista.length && (
        <>
          <AdminForm
            alapObj={lista.felhasznalok.alapObj}
            adatok={lista.felhasznalok.adatok}
            apik={lista.felhasznalok.apik}
          />

          <Table responsive striped className="admin-table">
            <thead>
              <TablaFejlecSor adatok={lista.felhasznalok.adatok} />
            </thead>

            <tbody>
              {objLista.map((value, index) => {
                return (
                  <TablaSor
                    key={index}
                    obj={value}
                    fejlec={true}
                    sorszam={index}
                    adatok={lista.felhasznalok.adatok}
                    apik={lista.felhasznalok.apik}
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
