
"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [loding, setLoding] = useState(null);
  const [conversation, setConversation] = useState([]);
  // const []

  return (
    <GlobalContext.Provider
      value={{ loding, setLoding, conversation, setConversation }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
