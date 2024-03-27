import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";

const ParkolohelyContext = createContext();

export const useParkolohelyContext = () => useContext(ParkolohelyContext);

export const ParkolohelyProvider = ({ children }) => {
  const [parkolohely, setParkolohely] = useState([]);
  const [elsoEmelet, setElsoEmelet] = useState([]);
  const [masodikEmelet, setMasodikEmelet] = useState([]);
  const [harmadikEmelet, setHarmadikEmelet] = useState([]);

  const getParkolohely = async () => {
    try {
      const { data } = await axios.get("api/parkolohely");
      setParkolohely(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getElsoEmelet= async () => {
    try {
      const { data } = await axios.get("api/elsoEmelet");
      setElsoEmelet(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getMasodikEmelet= async () => {
    try {
      const { data } = await axios.get("api/masodikEmelet");
      setMasodikEmelet(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
    getParkolohely();
    getElsoEmelet()
    getMasodikEmelet()

    /* parkolohely.forEach((element) => {
        if (element.emelet === 1) {
          setElsoEmelet((prevElsoEmelet) => [...prevElsoEmelet, element]);
        } else if (element.emelet === 2) {
          setMasodikEmelet((prevMasodikEmelet) => [...prevMasodikEmelet, element]);
        } else if (element.emelet === 3) {
          setHarmadikEmelet((prevHarmadikEmelet) => [...prevHarmadikEmelet, element]);
        }
      }); */
  



  return (
    <ParkolohelyContext.Provider value={{ parkolohely, setParkolohely }}>
      {children}
    </ParkolohelyContext.Provider>
  );
};


