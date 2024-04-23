import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import { Chart } from "react-google-charts";
import "../css/fooldalArticle.css";



export default function AdminStatisztikaJarmuTipusok(props) {

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


  console.log(jarmuTipusok);

  let temp = [];

  temp.push(["típus", "darab", { role: "style" }]);
  jarmuTipusok.map((item) => 
{{temp.push([item.elnevezes, item.darab, ""])}});
  console.log(temp);

  let options = {
    title: "Járművek típus szerinti megoszlása",
  
  };


      return (

        <article className="fooldalArticle">
        
        <Chart
        chartType="ColumnChart"
        options={options}
        width="100%"
        height="400px"
        data={temp}
       
      />
    
    </article> 
    
      );
    }
  


