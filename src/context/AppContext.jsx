import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = (props) => {
  const [users] = useState({});
  return (
    <AppContext.Provider value={{users}}> 
        {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider;