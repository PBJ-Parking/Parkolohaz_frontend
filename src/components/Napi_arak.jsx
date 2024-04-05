
import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Adathiba from "./Adathiba";

export default function Napi_arak(props) {

  const [akt_arak, setakt_arak] = useState([]);

    const adatlekeres = async () => {
      try {
      const { data } = await axios.get("api/akt_arak");

      setakt_arak(data);
    } catch (error) {
      console.error(error);
  
    }
  };

useEffect(() => {
  adatlekeres();
}, []);

return (
  
    <ul className="list-group">
      {akt_arak.length>0?
      akt_arak.map((elem, index) => {
        return <li className="list-group-item list-group-item-light" key={index}> {elem.elnevezes} : {elem.ar} forint</li>;
      }):  <Adathiba/>}

    </ul>
 


);
  }

