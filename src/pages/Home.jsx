import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Home = () => {
  const {isLogged, userLogged} = useContext(AppContext);
  console.log(isLogged);
  console.log(userLogged);

  return (
    <div>Home</div>
  )
}

export default Home