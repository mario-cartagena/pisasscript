import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Home = () => {
  const {isLogged} = useContext(AppContext);
  console.log(isLogged);

  return (
    <div>Home</div>
  )
}

export default Home