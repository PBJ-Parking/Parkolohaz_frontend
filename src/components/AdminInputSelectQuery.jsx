import { Fragment, useEffect, useState } from "react";
import axios from "../api/axios";

export default function AdminInputSelectQuery(props) {
  const [lista, setLista] = useState([]);

  async function lekerdezes() {
    try {
      const { data } = await axios.get(props.uri);
      setLista(data);
    } catch (error) {
      console.error(error);
    }
  }

  function valtozas(event) {
    props.esemeny(event);
  }

  return (
    <>
      {props.readOnly ? (
        <select name={props.name} disabled value={props.objektum}>
          <option value={props.objektum}>{props.objektum}</option>
        </select>
      ) : (
        <select
          value={props.objektum}
          name={props.name}
          onFocus={lekerdezes}
          onChange={valtozas}
        >
          {lista.map((value, index) => {
            return (
              <Fragment key={index}>
                <option value={value}>{value}</option>
              </Fragment>
            );
          })}
        </select>
      )}
    </>
  );
}
