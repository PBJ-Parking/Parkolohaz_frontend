import { Fragment, useEffect, useState } from "react";

export default function AdminInputSelect(props) {
  function valtozas(event) {
    props.esemeny(event);
  }

  return (
    <>
      {props.readOnly ? (
        <select name={props.name} onChange={valtozas} disabled>
          <option value={props.objektum}>{props.objektum}</option>
        </select>
      ) : (
        <select value={props.objektum} name={props.name} onChange={valtozas}>
          {props.lista.map((value, index) => {
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
