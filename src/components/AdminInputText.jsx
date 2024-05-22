export default function AdminInputText(props) {
  function valtozas(event) {
    props.esemeny(event);
  }



  return (
    <>
      {props.readOnly ? (
        <input
          type="text"
          name={props.name}
          onChange={valtozas}
          value={props.objektum}
          readOnly
          
        />
      ) : (
        <input
          type="text"
          name={props.name}
          onChange={valtozas}
          value={props.objektum}
          
        />
      )}
    </>
  );
}
