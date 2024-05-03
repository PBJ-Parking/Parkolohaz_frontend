export default function AdminInputPassword(props) {
  function valtozas(event) {
    props.esemeny(event);
  }


  return (
    <>
      {props.readOnly ? (
        <input
          type="password"
          name={props.name}
          onChange={valtozas}
          value={props.objektum}
          readOnly
          
        />
      ) : (
        <input
          type="password"
          name={props.name}
          onChange={valtozas}
          value={props.objektum}
          
        />
      )}
    </>
  );
}
