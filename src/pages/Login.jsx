import React, { useEffect, useState } from 'react';
import { getPizzas } from '../../src/services/getPizzas';

const Login = () => {
  const [pizzas, setPizzas] = useState([]);
  

  useEffect(() => {
    getPizzas().then((response)=>{
      console.log(response)
      setPizzas(response)
    })
  }, [])
  
  return (
    <div>
      {pizzas.map((item) => (
        <>
          <img src={item.img} alt="" />
          <h1>PisassScript</h1>
        </>
      ))}
    </div>
  )
}

export default Login