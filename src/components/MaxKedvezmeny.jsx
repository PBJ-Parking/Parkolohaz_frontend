import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



export default function MaxKedvezmeny(props) {

  const [maxKedvezmeny, setMaxKedvezmeny] = useState();
  const [hiba, sethiba] = useState(null);

    const adatlekeres = async () => {
      try {
      const { data } = await axios.get("api/maxKedvezmeny");

      setMaxKedvezmeny(data);
      console.log(data);
    } catch (error) {
      console.error(error);
     
      sethiba(error);
        console.log(hiba);

    }
  };

useEffect(() => {
  adatlekeres();
}, []);

if (maxKedvezmeny==null) {

  return(<p className="text-center text-bg-light p-3"> Kedvezményért nézzen vissza később!</p> )
}

return (
  
  <h1 className="text-center text-bg-light p-3"> 
      
      Béreljen most akár {maxKedvezmeny.merteke} % kedvezménnyel!

    </h1>
  
  
 


);

  }

