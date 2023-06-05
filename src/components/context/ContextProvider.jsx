import { createContext, useContext, useState } from 'react';

const stateContext = createContext();
const fetchUrl = 'https://official-joke-api.appspot.com/random_joke';
const ContextProvider = ({ children }) => {
  const [toolbar, setBar] = useState(true);
  const [menu, setMenu] = useState(false);
  return (
    <stateContext.Provider value={{ fetchUrl, toolbar, setBar, menu, setMenu }}>
      {children}
    </stateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = () => useContext(stateContext);
