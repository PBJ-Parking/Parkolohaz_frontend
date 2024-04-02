export default function TablaFejlecSor(props) {

  

  return (
    <tr>
      {Object.keys(props.adatok).map(function (index) {
        return (
          props.adatok[index].lathato && (
            <th key={index}>{props.adatok[index].fejlec}</th>
          )
        );
      })}
      <th key={"modositas"}>módosítás</th>
      <th key={"torles"}>törlés</th>
    </tr>
  );
}
