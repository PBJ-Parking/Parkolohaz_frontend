import axios from "../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingAnimator from 'react-typing-animator';


export default function MaxKedvezmeny(props) {

  const [maxKedvezmeny, setMaxKedvezmeny] = useState();
  const [hiba, sethiba] = useState(null);

  const adatlekeres = async () => {
    try {
      const { data } = await axios.get("api/maxKedvezmeny");

      setMaxKedvezmeny(data);

    } catch (error) {
      console.error(error);

      sethiba(error);
      console.log(hiba);

    }
  };

  useEffect(() => {
    adatlekeres();
  }, []);

  if (maxKedvezmeny == null) {

    return (<h2 className="text-center text-bg-light p-3"> Kedvezményért nézzen vissza később!</h2>)
  }

  const textArray = ['Regisztráljon még ma!', 'Unja a parkolóhely keresést?','Nálunk megtalálta!'];


  return (

   <h1 className="text-center" >Béreljen most akár {maxKedvezmeny.merteke} % kedvezménnyel!
    
      <TypingAnimator
        textArray={textArray}
        cursorColor="#333"
        textColor="#555"
        fontSize="24px"
        loop
        typingSpeed={50}
        delaySpeed={1000}
        backspace
        height="60px"
      />
      </h1>
    );
  }
  
 