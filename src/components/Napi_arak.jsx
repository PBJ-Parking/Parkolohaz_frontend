
import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
export default function Napi_arak(props) {

   const [akt_arak, setakt_arak] = useState([]);
    
    const adatlekeres = async () =>{
    const {data}= await axios.get("api/akt_arak") 
        
    setakt_arak(data);
    console.log(data);
    };
  
   useEffect(() => {
     adatlekeres();
   }, []); 

    return (
        <div className="m-auto row" style={{ maxWidth: "400px" }} >


          {akt_arak.map((elem, index) => {
            console.log(elem, index)
            return <p key={index}>típus: {elem.tipus}  {elem.ar} forint</p>;
          })}
       


        </div>
     
  
      
    );
  }
  