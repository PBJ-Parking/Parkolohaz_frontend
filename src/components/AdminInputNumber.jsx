export default function AdminInputNumber(props) {
  function valtozas(event) {
    props.esemeny(event);
  }

  return (
    <>
      {props.readOnly ? (
        <input
          type="number"
          name={props.name}
          onChange={valtozas}
          value={props.objektum}
          readOnly
          disabled
          min={props.min}
          max={props.max}
        />
      ) : (
        <input
          type="number"
          name={props.name}
          onChange={valtozas}
          value={props.objektum}
          min={props.min}
          max={props.max}
        />
      )}
    </>
  );
}
