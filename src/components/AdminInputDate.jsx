export default function AdminInputDate(props) {
  function valtozas(event) {
    props.esemeny(event);
  }

  return (
    <>
      {props.readOnly ? (
        <input
          type="date"
          name={props.name}
          onChange={valtozas}
          value={props.objektum}
          readOnly
        />
      ) : (
        <input
          type="date"
          name={props.name}
          onChange={valtozas}
          value={props.objektum}
        />
      )}
    </>
  );
}
