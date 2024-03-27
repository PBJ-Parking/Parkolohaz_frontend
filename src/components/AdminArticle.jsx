import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import TablaSor from "./TablaSor";
import "../css/adminArticle.css";
import TablaFejlecSor from "./TablaFejlecSor";
import AdminForm from "./AdminForm";

export default function AdminArticle() {
  const [felhasznalok, setFelhasznalok] = useState([]);

  const adatlekeres = async () => {
    try {
      const { data } = await axios.get("api/felhasznalok");
      setFelhasznalok(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    adatlekeres();
  }, []);

  return (
    <Container fluid className="admin-container">
      {felhasznalok.length > 0 && (
        <>
          <AdminForm obj={felhasznalok[0]} />

          <Table responsive striped className="admin-table">
            <thead>
              <TablaFejlecSor obj={felhasznalok[0]} />
            </thead>

            <tbody>
              {felhasznalok.map((value, index) => {
                return (
                  <TablaSor
                    key={index}
                    obj={value}
                    fejlec={true}
                    sorszam={index}
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
