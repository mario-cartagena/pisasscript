import React, { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) => {
  
  const [isLogged, setIsLogged] = useState(false)

  return (
    <AppContext.Provider value={{isLogged, setIsLogged}}> 
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider;