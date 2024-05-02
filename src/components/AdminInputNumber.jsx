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
        />
      ) : (
        <input
          type="number"
          name={props.name}
          onChange={valtozas}
          value={props.objektum}
        />
      )}
    </>
  );
}
