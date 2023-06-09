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
          <h1>PisassScript</h1>
          <img src={item.img.one} alt="" />
        </>
      ))}
    </div>
  )
}

export default Login