import { createContext, useContext, useState } from 'react';

const stateContext = createContext();
const api_key = '551bb3d122msh33a8dc1974c7b74p1a3c67jsn0d4a8e0a9d77';
const host = 'jokeapi-v2.p.rapidapi.com';
const fetchUrl = 'https://jokeapi-v2.p.rapidapi.com/joke/Any';
const ContextProvider = ({ children }) => {
  const [toolbar, setBar] = useState(true);
  const [menu, setMenu] = useState(false);
  return (
    <stateContext.Provider
      value={{ fetchUrl, toolbar, setBar, menu, setMenu, host, api_key }}
    >
      {children}
    </stateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = () => useContext(stateContext);
