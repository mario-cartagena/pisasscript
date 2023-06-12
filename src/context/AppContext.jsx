import React, { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) => {
  
  const [isLogged, setIsLogged] = useState(false)
  const [userLogged, setUserLogged] = useState(null);
  const [users] = useState({});
  const [orderPizza, setOrderPizza] = useState([]);
  const updateOrderPizza = (pizza) => {
    setOrderPizza(pizza);
    // setOrderPizza((prevOrderPizza) => [...prevOrderPizza, pizza]);
  };

  return (
    <AppContext.Provider value={{isLogged, setIsLogged, userLogged, setUserLogged, users, orderPizza, updateOrderPizza}}> 
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider;