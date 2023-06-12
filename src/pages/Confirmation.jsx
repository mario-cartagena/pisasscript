import React from 'react'
import { useNavigate } from 'react-router-dom'

const Confirmation = () => {
  
  const navigate = useNavigate();
  
  const handleToHome = () => {
    navigate("/home");
  }
  return (
    <div className='confirmation'>
      <div className="confirmation__top">
        <div className="confirmation__checked"></div>
        <div className="confirmation__text">
          <h2>Tu pedido está en proceso</h2>
          <span>Serás notificado cuando llegue el repartidor.</span>
        </div>
      </div>
      <button type="submit" className='confirmation__bottom' onClick={handleToHome}>Aceptar</button>
    </div>
  )
}

export default Confirmation