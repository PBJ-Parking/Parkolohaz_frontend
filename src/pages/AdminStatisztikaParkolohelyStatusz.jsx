import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import { Chart } from "react-google-charts";
import "../css/fooldalArticle.css";



export default function AdminStatisztikaParkolohelyStatusz(props) {

  const [parkolohelyek, setParkolohelyek] = useState([]);

  const [hiba, sethiba] = useState(null);

  const adatlekeres = async () => {
    try {
      const { data } = await axios.get("api/parkolohely_darab_statusz");
      setParkolohelyek(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      sethiba(error);
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
  switch (item.statusz) {
    case "s": 
    temp.push(["szabad", item.darab, ""]);
    break;
    case "f": 
    temp.push(["foglalt", item.darab, ""]);
    break;
    case "n": 
    temp.push(["nem üzemel", item.darab, ""]);
    break;
    case "b": 
    temp.push(["bérelt", item.darab, ""]);
    break;
  
    default:
      break;
  }
  
  });
  

  let options = {
    title: "Parkolóhelyek státusz szerinti megoszlása",
  
  };


      return (

        <article className="fooldalArticle">
       
          <Chart
            chartType="PieChart"
            options={options}
            width="100%"
            height="400px"
            data={temp}
           
          />
      
        
       

        </article> 
      );
    }
  


