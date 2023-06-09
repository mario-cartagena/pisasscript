import React, { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) => {
  
  const [isLogged, setIsLogged] = useState(false);
  const [userLogged, setUserLogged] = useState(null);

  return (
    <AppContext.Provider value={{isLogged, setIsLogged, userLogged, setUserLogged}}> 
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider;