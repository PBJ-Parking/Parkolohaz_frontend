import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import { Chart } from "react-google-charts";


export default function AdminStatisztikaMutat(props) {

  const [parkolohelyek, setParkolohelyek] = useState([]);

  const [hiba, sethiba] = useState(null);

  const adatlekeres = async () => {
    try {
      const { data } = await axios.get("api/parkolohely_darab_statusz");
      setParkolohelyek(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    adatlekeres();
  }, []);


  console.log(parkolohelyek);

  let temp = [];

  temp.push(["státusz", "darab", { role: "style" }]);
  parkolohelyek.map((item) => 
{
  if(item.statusz!='m')
  {temp.push([item.statusz, item.darab, ""])}});
  console.log(temp);

  let options = {
    title: "Parkolóhelyek státusz szerinti megoszlása",
  
  };
      return (


        
          <Chart
            chartType="PieChart"
            options={options}
            width="120%"
            height="700px"
            data={temp}
           
          />
        
        /*<Chart chartType="ColumnChart" width="100%" height="400px" data={temp} />*/


      );
    }
  


