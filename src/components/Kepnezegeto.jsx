import { useState } from "react";
import "./css/kepnezegeto.css";

import kep1 from "../../kepek/slide/LimeWire AI Studio Asset.jpg";
import kep2 from "../../kepek/slide/LimeWire AI Studio Asset (1).jpg";
import kep3 from "../../kepek/slide/LimeWire AI Studio Asset (2).jpg";
import kep4 from "../../kepek/slide/LimeWire AI Studio Asset (3).jpg";
import kep5 from "../../kepek/slide/LimeWire AI Studio Asset (4).jpg";
import kep6 from "../../kepek/slide/LimeWire AI Studio Asset (5).jpg";

export default function Kepnezegeto() {
  const [kepIndex, setKepIndex] = useState(0);

  const kepLista = [kep1, kep2, kep3, kep4, kep5, kep6];

  function elore() {
    let index = kepIndex === kepLista.length - 1 ? 0 : kepIndex + 1;
    setKepIndex(index);
  }

  function hatra() {
    let index = kepIndex === 0 ? kepLista.length - 1 : kepIndex - 1;
    setKepIndex(index);
  }

  return (
    <div className="slideshow">
      <button onClick={hatra}>🡸</button>
      <div className="pontok">
        {kepLista.map((elem, index) => {
          return <div className="pont" key={index}></div>;
        })}
      </div>
      <img src={kepLista[kepIndex]} alt="kép 1..." />
      <button onClick={elore}>🡺</button>
    </div>
  );
}
