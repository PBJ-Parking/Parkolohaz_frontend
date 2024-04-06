import { Table } from "react-bootstrap";
import TablaFejlecSor from "./TablaFejlecSor";
import TablaSor from "./TablaSor";

export default function AdminTabla(props) {
  return (
    <Table responsive striped className="admin-table">
      <thead>
        <TablaFejlecSor adatok={props.adatok} />
      </thead>

      <tbody>
        

        {props.objLista && 
            props.objLista.map((value, index) => {
          return (
            <TablaSor
              key={index}
              obj={value}
              fejlec={true}
              sorszam={index}
              adatok={props.adatok}
              apik={props.apik}
            />
          );
        }) }
      </tbody>
    </Table>
  );
}
