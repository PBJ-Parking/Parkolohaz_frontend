import React, { createContext, useContext, useState } from 'react';

const DatumContext = createContext();

export const useInput = () => useContext(DatumContext);

export const InputProvider = ({ children }) => {
  const [datumVege, setDatumVege] = useState(new Date().toISOString().substring(0, 10));
  const [datumKezdete, setDatumKezdete] = useState(new Date().toISOString().substring(0, 10));

  return (
    <DatumContext.Provider value={{ datumVege, setDatumVege, datumKezdete,  setDatumKezdete}}>
      {children}
    </DatumContext.Provider>
  );
};
