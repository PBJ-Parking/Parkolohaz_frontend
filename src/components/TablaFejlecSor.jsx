export default function TablaFejlecSor(props) {
  return (
    <tr>
      {Object.keys(props.obj).map(function (index) {
        return <th key={index}>{index}</th>;
      })}
      <th key={"modositas"}>módosítás</th>
      <th key={"torles"}>törlés</th>
    </tr>
  );
}
