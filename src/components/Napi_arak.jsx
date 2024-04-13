
import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Adathiba from "./Adathiba";
import Adattoltes from "./Adattoltes";
import Adatnincs from "./Adatnincs";


export default function Napi_arak(props) {

  const [akt_arak, setakt_arak] = useState([]);
  const [hiba, sethiba] = useState(null);

    const adatlekeres = async () => {
      try {
      const { data } = await axios.get("api/akt_arak");

      setakt_arak(data);
      
    } catch (error) {
      console.error(error);
     
      sethiba(error);
        console.log(hiba);

    }
  };

useEffect(() => {
  adatlekeres();
}, []);


if (hiba) {
  return(<Adathiba/>)
}

if (akt_arak.length==0) {

  return(  <Adattoltes/>)
}

return (

   
    <ul className="list-group">
      
      {akt_arak.length>0?  
      akt_arak.map((elem, index) => {
      
        return <li className="list-group-item list-group-item-light" key={index}> {elem.elnevezes} : {elem.ar} forint</li>;
      }):<Adatnincs/> }
   


    </ul>
  
 


);

  }

