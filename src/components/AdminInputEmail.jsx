export default function AdminInputEmail(props) {
  function valtozas(event) {
    props.esemeny(event);
  }

  return (
    <>
      {props.readOnly ? (
        <input
          type="email"
          name={props.name}
          onChange={valtozas}
          value={props.objektum}
          readOnly
        />
      ) : (
        <input
          type="email"
          name={props.name}
          onChange={valtozas}
          value={props.objektum}
        />
      )}
    </>
  );
}
