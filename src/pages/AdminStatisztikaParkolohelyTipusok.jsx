import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import { Chart } from "react-google-charts";



export default function AdminStatisztikaParkolohelyTipusok(props) {

  const [parkolohelyTipusok, setParkolohelyTipusok] = useState([]);

  const [hiba, sethiba] = useState(null);

  const adatlekeres = async () => {
    try {
      const { data } = await axios.get("api/parkolohely_darab_tipusok");
      setParkolohelyTipusok(data);
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


  let options = {
    title: "Parkolóhelyek típus szerinti megoszlása",
  
  };
      return (

        
        <Chart chartType="ColumnChart"  options={options} width="100%" height="400px" data={temp} />

    
      );
    }
  


