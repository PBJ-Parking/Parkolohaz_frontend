import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import { Chart } from "react-google-charts";



export default function AdminStatisztikaMutat(props) {

  const [jarmuTipusok, setJarmuTipusok] = useState([]);

  const [hiba, sethiba] = useState(null);

  const adatlekeres = async () => {
    try {
      const { data } = await axios.get("api/jarmuvek_darab_tipusok");
      setJarmuTipusok(data);
      console.log(data);
    } catch (error) {
      console.log(error);
     
    }
  };

  useEffect(() => {
    adatlekeres();
  }, []);


  console.log(parkolohelyTipusok);

  let temp = [];

  temp.push(["típus", "darab", { role: "style" }]);
  parkolohelyTipusok.map((item) => 
{
  
  {temp.push([item.elnevezes, item.darab, ""])}});
  console.log(temp);


      return (

        
        <Chart chartType="ColumnChart" width="100%" height="400px" data={temp} />

    
      );
    }
  


