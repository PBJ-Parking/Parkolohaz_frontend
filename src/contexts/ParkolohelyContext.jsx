import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";


const ParkolohelyContext = createContext();

export const useParkolohelyContext = () => useContext(ParkolohelyContext);

export const ParkolohelyProvider = ({ children }) => {
  const [parkolohely, setParkolohely] = useState([]);
  const [elsoEmelet, setElsoEmelet] = useState([]);
  const [masodikEmelet, setMasodikEmelet] = useState([]);
  const [harmadikEmelet, setHarmadikEmelet] = useState([]);
  const [aktualisEmeletEll, setAktualisEmeletEll] = useState([]);
  const [emeletSzam, setEmeletSzam] = useState();
  const [arEllenorzes, setArEllenorzes] = useState();
  const [arTipus, setArTipus] = useState(0);
  const [KedvezmenyID, setKedvezmenyID] = useState();
  const [helyID, setHelyID] = useState();


  const getElsoEmelet = async () => {
    try {
      const { data } = await axios.get("api/emeletek/1");
      setElsoEmelet(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getMasodikEmelet = async () => {
    try {
      const { data } = await axios.get("api/emeletek/2");
      setMasodikEmelet(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getHarmadikEmelet = async () => {
    try {
      const { data } = await axios.get("api/emeletek/3");
      setHarmadikEmelet(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getEmelet = async (szam) => {
    try {
      const { data } = await axios.get("api/emeletek/" + szam);
      console.log(data)
      setAktualisEmeletEll(data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <ParkolohelyContext.Provider value={{ parkolohely, setParkolohely, getElsoEmelet, getMasodikEmelet, 
    getHarmadikEmelet, elsoEmelet, setElsoEmelet, masodikEmelet, harmadikEmelet, setAktualisEmeletEll, aktualisEmeletEll,
    arEllenorzes, setArEllenorzes, getEmelet, emeletSzam, setEmeletSzam, arTipus, setArTipus,
    KedvezmenyID, setKedvezmenyID, helyID, setHelyID}}>
      {children}
    </ParkolohelyContext.Provider>
  );
};


