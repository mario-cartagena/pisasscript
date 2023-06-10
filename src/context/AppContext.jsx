import React, { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) => {
  
  const [isLogged, setIsLogged] = useState(false)
  const [userLogged, setUserLogged] = useState(null);
  const [users] = useState({});
  return (
    <AppContext.Provider value={{isLogged, setIsLogged, userLogged, setUserLogged, users}}> 
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider;